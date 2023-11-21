package com.example.atv.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.atv.constant.Result;
import com.example.atv.dao.mapper.AtvService;
import com.example.atv.generatetor.entity.QuestionRecord;
import com.example.atv.generatetor.service.IQuestionRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;


@Api("atv指标计算接口")
@Slf4j
@CrossOrigin
@RestController("/api")
@Component
public class ZhibiaoController implements CommandLineRunner {

    @Resource
    private AtvService atvService;

    @Resource
    private IQuestionRecordService iQuestionRecordService;


    /**
     * 测试接口
     * @return string
     */
    @ApiOperation(value = "测试接口")
    @ResponseBody
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test() {
        log.debug("test-GET:info");
        return "hello world";
    }

    /**
     * 计算地市大指标下问题楼栋的数量
     */
    @ApiOperation(value = "问题指标计算")
    @ResponseBody
    @PostMapping(value = "indicatorCompute")
    public Result compute(@RequestBody List<String> list,@RequestParam(required = false) String city ,@RequestParam String reportYear,@RequestParam String province){
        List<Map<String,Object>> r=new ArrayList<>();
        for (String l:list) {
            List<Map<String,Object>> r_l=atvService.compute(city,l);
            Map<String,Object> m=new HashMap<>();
            m.put("num",r_l.size());
            m.put("indicator",l);

            //进行数据库插入数据保存
            QuestionRecord questionRecord=new QuestionRecord();
            questionRecord.setCity(city);
            questionRecord.setNum(r_l.size());
            questionRecord.setIndicatorId(l);
            questionRecord.setReportYear(reportYear);
            questionRecord.setProvince(province);

            //先进行查询有进行修改，没有进行新增
            QueryWrapper<QuestionRecord> wrapper=new QueryWrapper<>();
            wrapper.eq("city",city)
                    .eq("province",province)
                    .eq("indicator_id",l)
                    .eq("report_year",reportYear);
            QuestionRecord questionRecord_r=iQuestionRecordService.getOne(wrapper);
            if(questionRecord_r==null){
                iQuestionRecordService.save(questionRecord);
            }else {
                iQuestionRecordService.update(questionRecord,wrapper);
            }
            r.add(m);
        }

        return Result.success(r);
    }

    /**
     * 存在问题的住房楼栋
     * @param courtName indicatorList
     */
    @ApiOperation(value = "存在问题的住房楼栋")
    @ResponseBody
    @PostMapping(value = "problemCourt")
    public Result problemCourt(@RequestParam(required = false) String communityId
            ,@RequestParam(required = false) String courtName
            ,@RequestBody(required = false) List<String> indicatorList,
            @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
            @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset){
        //根据小区名获取list
        List<Map<String,Object>> l = new ArrayList<>();
        List<Map<String,Object>> l_t;
        for (int i=1;i<=10;i++) {
            if(i==2||i==9){
                l_t=atvService.buildProblem(communityId,courtName,"2."+i);
            }else{
                l_t=atvService.buildProblem(communityId,courtName,"2."+i+".");
            }

            int finalI = i;
            l_t.forEach(m->{
                m.put("indicatorId","2."+ finalI);
            });
            l.addAll(l_t);
        }
        List<Map<String,String>> r=new ArrayList<>();
        l.forEach(m-> workProcess(r,m));
        //根据indicatorList进行上面的结果进行过滤
        if(indicatorList.size()==0){
            return Result.success(l);
        }
        List<Map<String,String>> res=new ArrayList<>();
        r.forEach(rr->{
            int flag=0;
            for(String indicator:indicatorList){
                if(rr.containsKey(indicator))flag++;
            }
            if(flag==indicatorList.size()){
                res.add(rr);
            }
        });
        //手动分页 --狗头--
        List<Map<String,String>> res_page;
        res_page=res.subList((int) (pageSize*(offset-1)), (int) (pageSize*offset));

        return Result.success(res_page);
    }

    /**
     * 对数据进行整理，将多指标的列转换成一行的数据
     */
    public void workProcess(List<Map<String,String>> r,Map<String,Object> m){
        String buildnumber= (String) m.get("buildNumber");
        String courtName= (String) m.get("courtName");
        String communityId=(String)m.get("communityId");
        AtomicInteger flag= new AtomicInteger();
        r.forEach(r_m->{
            String buildNumber_m=r_m.get("buildNumber");
            String courtName_m=r_m.get("courtName");
            String communityId_m=r_m.get("communityId");
            if(Objects.equals(buildNumber_m, buildnumber) && Objects.equals(courtName_m, courtName) && Objects.equals(communityId_m, communityId)){
                flag.getAndIncrement();
                r_m.put((String) m.get("indicatorId"),"1");
            }
        });
        if(flag.intValue()==0){
            Map<String,String> t_m=new HashMap<>();
            t_m.put("county", (String) m.get("county"));
            t_m.put("street", (String) m.get("street"));
            t_m.put("communityName", (String) m.get("communityName"));
            t_m.put("communityId", (String) m.get("communityId"));
            t_m.put("courtName", (String) m.get("courtName"));
            t_m.put("buildNumber", (String) m.get("buildNumber"));
            t_m.put((String) m.get("indicatorId"),"1");
            r.add(t_m);
        }
    }

    /**
     * 查询楼栋的问题清单
     */
    @ApiOperation(value = "查询楼栋的问题清单")
    @ResponseBody
    @PostMapping(value = "problmCourtDetail")
    public Result problmCourtDetail(@RequestParam(required = false) String communityId,
                                    @RequestParam(required = false) String courtName,
                                    @RequestParam(required = false) String indcatorId,
                                    @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
                                    @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset){
        //根据小区名获取list
        List<Map<String,Object>> l = new ArrayList<>();
        List<Map<String,Object>> l_t;
        for (int i=1;i<=10;i++) {
            if(i==2||i==9){
                l_t=atvService.buildProblem(communityId,courtName,"2."+i);
            }else{
                l_t=atvService.buildProblem(communityId,courtName,"2."+i+".");
            }
            int finalI = i;
            l_t.forEach(m->{
                m.put("indicatorId","2."+ finalI);
            });
            l.addAll(l_t);
        }
        //获取列表信息中的图片
        l.forEach(ll->{
            String indicatorId= (String) ll.get("indicatorId");
            String buildNumber= (String) ll.get("buildNumber");
            String communityId_s= (String) ll.get("communityId");
            String courtName_s= (String) ll.get("courtName");
            //进行图片数据查询
            List<Map<String,Object>> p_l=atvService. searchPhoto(courtName_s,indicatorId,communityId_s,buildNumber);
            ll.put("photoList",p_l);
        });

        if(Objects.equals(indcatorId, "") || indcatorId==null)
        {
            return Result.success(l);
        }
        List<Map<String,Object>> res = new ArrayList<>();
        l.forEach(ll->{
            String indicatorId_s= (String) ll.get("indicatorId");
            if(Objects.equals(indicatorId_s, indcatorId)){
                res.add(ll);
            }
        });
        //手动分页
        List<Map<String,Object>> res_page;
        res_page=res.subList((int) (pageSize*(offset-1)), (int) (pageSize*offset));

        return Result.success(res_page);

    }

    @Override
    public void run(String... args) throws Exception {
        log.debug("数据采集系统启动");
    }
}
