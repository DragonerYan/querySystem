package com.example.atv.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.atv.constant.Result;
import com.example.atv.dao.mapper.AtvService;
import com.example.atv.dao.mapper.ZhibiaoService;
import com.example.atv.generatetor.entity.QuestionRecord;
import com.example.atv.generatetor.service.IQuestionRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.util.Internal;
import org.apache.poi.util.StringUtil;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;


@Api("atv指标计算接口")
@Slf4j
@CrossOrigin
@RestController
@Component
@RequestMapping(value = "api")
public class ZhibiaoController implements CommandLineRunner {

    @Resource
    private AtvService atvService;
    @Resource
    private ZhibiaoService zhibiaoService;

    @Resource
    private IQuestionRecordService iQuestionRecordService;
    private boolean aBoolean;


    /**
     * 测试接口
     * @return string
     */
    @ApiOperation(value = "测试接口")
    @ResponseBody
    @RequestMapping(value = "/zhibiaoTest", method = RequestMethod.GET)
    public String test() {
        log.debug("test-GET:info");
        return "hello world";
    }

    /**
     * 计算地市大指标下问题楼栋的数量（楼栋）
     */
    @ApiOperation(value = "问题指标计算")
    @ResponseBody
    @PostMapping(value = "indicatorCompute")
    public Result compute(@RequestBody List<String> list,@RequestParam(required = false) String city ,@RequestParam String reportYear,@RequestParam String province){
        List<Map<String,Object>> r=new ArrayList<>();
        for (String l:list) {
            List<Map<String,Object>> r_l=atvService.compute(reportYear,city,l);
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
    public Result problemCourt(
            @RequestParam(required = false) String reportYear,
            @RequestParam() String city,
            @RequestParam(required = false) String street,
            @RequestParam(required = false) String county,
            @RequestParam(required = false) String communityId
            ,@RequestParam(required = false) String courtName
            ,@RequestBody(required = false) List<String> indicatorList,
            @RequestParam(required = false,defaultValue = "")String bTime,
            @RequestParam(required = false,defaultValue = "")String eTime,
            @RequestParam(required = false,defaultValue = "")String bPeople,
            @RequestParam(required = false,defaultValue = "")String ePeople,
            @RequestParam(required = false,defaultValue = "")String b60People,
            @RequestParam(required = false,defaultValue = "")String e60People,
            @RequestParam(required = false,defaultValue = "")String bDepartment,
            @RequestParam(required = false,defaultValue = "")String eDepartment,
            @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
            @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset){
        //根据小区名获取list
        List<Map<String,Object>> l = new ArrayList<>();
        List<Map<String,Object>> l_t;
        for (int i=1;i<=10;i++) {
            if(i==2||i==9){
                l_t=atvService.buildProblem(communityId,courtName,"2."+i,city,county,street,reportYear,
                        bTime,eTime,bPeople,ePeople,b60People,e60People,bDepartment,eDepartment);
            }else{
                l_t=atvService.buildProblem(communityId,courtName,"2."+i+".",city,county,street,reportYear,
                        bTime,eTime,bPeople,ePeople,b60People,e60People,bDepartment,eDepartment);
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
            List<Map<String,String>> res_page;
            long endNum=pageSize*offset>r.size()?r.size():pageSize*offset;
            res_page=r.subList((int) (pageSize*(offset-1)), (int) endNum);
            //将数据和总数一起放到返回结果中
            Map<String,Object> res_map=new HashMap<>();
            res_map.put("res_page",res_page);
            res_map.put("totalNum",r.size());
            return Result.success(res_map);
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
        long endNum=pageSize*offset>res.size()?res.size():pageSize*offset;
        res_page=res.subList((int) (pageSize*(offset-1)), (int) endNum);
        //将数据和总数一起放到返回结果中
        Map<String,Object> res_map=new HashMap<>();
        res_map.put("res_page",res_page);
        res_map.put("totalNum",res.size());
        return Result.success(res_map);
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
                r_m.put((String) m.get("indicatorId"),"是");
            }
        });
        if(flag.intValue()==0){
            Map<String,String> t_m=new HashMap<>();
            t_m.put("county", (String) m.get("county"));
            t_m.put("street", (String) m.get("street"));
            t_m.put("communityName", (String) m.get("communityName"));
            t_m.put("communityId", (String) m.get("communityId"));
            t_m.put("courtName", (String) m.get("courtName"));
            t_m.put("buildNumber", String.valueOf(m.get("buildNumber")));
            t_m.put("numberPeople", String.valueOf(m.get("numberPeople")));
            t_m.put("buildTime", String.valueOf(m.get("buildTime")));
            t_m.put("numberOver60People", String.valueOf(m.get("numberOver60People")));
            t_m.put("unitsNumber", String.valueOf(m.get("unitsNumber")));
            t_m.put("numberDepartment", String.valueOf(m.get("numberDepartment")));
            t_m.put((String) m.get("indicatorId"),"是");
            r.add(t_m);
        }
    }

    /**
     * 查询楼栋的问题清单
     */
    @ApiOperation(value = "查询楼栋的问题清单")
    @ResponseBody
    @PostMapping(value = "problmCourtDetail")
    public Result problmCourtDetail(
                                    @RequestParam(required = false) String reportYear,
                                    @RequestParam() String city,
                                    @RequestParam(required = false) String street,
                                    @RequestParam(required = false) String county,
                                    @RequestParam(required = false) String communityId,
                                    @RequestParam(required = false) String courtName,
                                    @RequestParam(required = false) String indcatorId,
                                    @RequestParam(required = false,defaultValue = "")String bTime,
                                    @RequestParam(required = false,defaultValue = "")String eTime,
                                    @RequestParam(required = false,defaultValue = "")String bPeople,
                                    @RequestParam(required = false,defaultValue = "")String ePeople,
                                    @RequestParam(required = false,defaultValue = "")String b60People,
                                    @RequestParam(required = false,defaultValue = "")String e60People,
                                    @RequestParam(required = false,defaultValue = "")String bDepartment,
                                    @RequestParam(required = false,defaultValue = "")String eDepartment,
                                    @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
                                    @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset){
        //根据小区名获取list
        List<Map<String,Object>> l = new ArrayList<>();
        List<Map<String,Object>> l_t;
        for (int i=1;i<=10;i++) {
            if(i==2||i==9){
                l_t=atvService.buildProblem(communityId,courtName,"2."+i,city,county,street,reportYear,
                        bTime,eTime,bPeople,ePeople,b60People,e60People,bDepartment,eDepartment);
            }else{
                l_t=atvService.buildProblem(communityId,courtName,"2."+i+".",city,county,street,reportYear,
                        bTime,eTime,bPeople,ePeople,b60People,e60People,bDepartment,eDepartment);
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
            List<Map<String,Object>> p_l=atvService.searchPhoto(courtName_s,indicatorId,communityId_s,buildNumber,reportYear);
            //将上面图片中的图片连接拿出来
            List<String> p_ll= p_l.stream().map(m->m.get("photo_path").toString()).collect(Collectors.toList());
            ll.put("photoList",p_ll);
        });

        if(Objects.equals(indcatorId, "") || indcatorId==null)
        {
            //手动分页
            List<Map<String,Object>> res_page;
            long endNum=pageSize*offset>l.size()?l.size():pageSize*offset;
            res_page=l.subList((int) (pageSize*(offset-1)), (int) endNum);
            //将数据和总数一起放到返回结果中
            Map<String,Object> res_map=new HashMap<>();
            res_map.put("res_page",res_page);
            res_map.put("totalNum",l.size());
            return Result.success(res_map);
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
        long endNum=pageSize*offset>res.size()?res.size():pageSize*offset;
        res_page=res.subList((int) (pageSize*(offset-1)), (int) endNum);

        //将数据和总数一起放到返回结果中
        Map<String,Object> res_map=new HashMap<>();
        res_map.put("res_page",res_page);
        res_map.put("totalNum",res.size());
        return Result.success(res_map);
    }

    /**
     * 大屏界面计算有问题的指标占总数的百分比
     */
    @ApiOperation("大屏界面计算有问题的指标占总数的百分比")
    @GetMapping(value = "computeProblemBuildPercent")
    @ResponseBody
    public Result computeProblemBuildPercent(@RequestParam()String reportYear,@RequestParam()String city,@RequestParam()String indicatorId){
        //填报过程中有问题的
        List<Map<String, Object>> list = atvService.compute(reportYear,city, indicatorId);
        //该地市填报中所有的总数
        int computeTotal = atvService.computeTotal(reportYear,city,indicatorId);
        log.debug(computeTotal+" "+list.size());
        if (computeTotal == 0) {
            return Result.fail("该地市并没有填报的数据");
        }
        Double r=list.size()*1.0/computeTotal;
        return Result.success(String.format("%.2f",r));
    }

    /**
     * 每个市下面的各个区有问题的占整个市中有问题的百分比
     */
    @ApiOperation("每个市下面的各个区有问题的占整个市中有问题的百分比")
    @GetMapping(value = "computeCountyPercent")
    @ResponseBody
    public Result computeCountyPercent(@RequestParam()String reportYear,@RequestParam() String city, @RequestParam() String indicatorId) {
        //市级下各个区县有问题的数量
        List<Map<String, Object>> mapList = atvService.computeCountyPercent(reportYear,city, indicatorId);
        //地市中所有有问题的总数
        List<Map<String, Object>> list = atvService.compute(reportYear,city, indicatorId);
        int total=list.size();
        List<Map<String,String>> s= new ArrayList<>();
        mapList.forEach(m->{
            Map<String,String> t =new HashMap<>();
            t.put("city", (String) m.get("city"));
            t.put("county", (String) m.get("county"));
            double percent= Double.parseDouble(String.valueOf(m.get("num")))/total;
            percent=Math.round(percent*100)*0.01;
            t.put("percent", String.format("%.2f", percent));
            t.put("percentString", m.get("num")+"/"+total);
            t.put("num", String.valueOf(m.get("num")));
            s.add(t);
        });
        s.sort(Comparator.comparingDouble(a -> Double.parseDouble(a.get("percent"))));
        return Result.success(s);
    }

    /**
     * 计算每个街道中有问题的占整个区中的占比
     */
    @ApiOperation("计算每个街道中有问题的占整个区中的占比")
    @GetMapping(value = "computeStreetPercent")
    @ResponseBody
    public Result computeStreetPercent(@RequestParam()String reportYear,@RequestParam() String city,@RequestParam() String county, @RequestParam() String indicatorId) {
        //区县级下各个街道有问题的数量
        List<Map<String, Object>> mapList = atvService.computeStreetPercent(reportYear,city,county, indicatorId);
        //区县中所有有问题的总数
        int total = atvService.computeCountyTotal(reportYear,city,county, indicatorId);
        List<Map<String,String>> s= new ArrayList<>();
        mapList.forEach(m->{
            Map<String,String> t =new HashMap<>();
            t.put("city", (String) m.get("city"));
            t.put("county", (String) m.get("county"));
            t.put("street", (String) m.get("street"));
            double percent= Double.parseDouble(String.valueOf(m.get("num")))/total;
            percent=Math.round(percent*100)*0.01;
            t.put("percent", String.format("%.2f", percent));
            t.put("percentString", m.get("num")+"/"+total);
            t.put("num", String.valueOf(m.get("num")));
            s.add(t);
        });
        s.sort(Comparator.comparingDouble(a -> Double.parseDouble(a.get("percent"))));
        return Result.success(s);
    }

    /**
     * 计算社区的指标计算部分
     */
    @ApiOperation("计算社区的指标计算部分")
    @PostMapping(value = "indicatorComputeCommunity")
    @ResponseBody
    public Result indicatorComputeCommunity(@RequestParam()String city,@RequestBody List<String> indicatorList,@RequestParam String reportYear,@RequestParam(required = false,defaultValue = "") String communityId){
        Map<String,String> res=new HashMap<>();
        try {
            indicatorList.forEach(indicator->{
                Object r=0;
                switch (indicator){
                    case "3.1.1":
                        r=zhibiaoService.compute3_1_1(city,reportYear,communityId);
                        break;
                    case "3.1.2":
                        r= zhibiaoService.compute3_1_2(city,reportYear,communityId);
                        break;
                    case "3.1.3":
                        r= zhibiaoService.compute3_1_3(city,reportYear,communityId);
                        break;
                    case "3.1.4":
                        r= zhibiaoService.compute3_1_4(city,reportYear,communityId);
                        break;
                    case "3.1.5":
                        r= zhibiaoService.compute3_1_5(city,reportYear,communityId);
                        break;
                    case "3.1.6":
                        r= zhibiaoService.compute3_1_6(city,reportYear,communityId);
                        break;
                    case "3.2.7":
                        r= zhibiaoService.compute3_2_7(city,reportYear,communityId);
                        break;
                    case "3.2.8":
                        r= zhibiaoService.compute3_2_8(city,reportYear,communityId);
                        break;
                    case "3.2.9":
                        r= zhibiaoService.compute3_2_9(city,reportYear,communityId);
                        break;
                    default:
                        break;
                }
                res.put(indicator,String.valueOf(r==null?0:r));
            });
        }catch (Exception e){
            e.printStackTrace();
            log.error(e.getMessage());
        }

        return Result.success(res);
    }

    /**
     * 每个市下面的各个区有问题的社区占整个市中有问题的百分比
     */
    @ApiOperation("每个市下面的各个区有问题的社区占整个市中有问题的百分比")
    @PostMapping("computeCountyPercentCommunity")
    @ResponseBody
    public Result computeCountyPercentCommunity(String city,String indicatorId,String reportYear){

        List<Map<String,String>> res=new ArrayList<>();
        try {
            List<String> list=new ArrayList<>();list.add(indicatorId);
            Result result=indicatorComputeCommunity(city,list,reportYear,null);
            Map<String,String> total=(Map<String,String>)result.getData();
            double totalNum= Double.parseDouble(String.valueOf(total.get(indicatorId)));

            //计算地市下每个区的占比
            List<Map<String,Object>> r=new ArrayList<>();
            switch (indicatorId){
                case "3.1.1":
                    r=zhibiaoService.computeCounty3_1_1(city,reportYear,null);
                    break;
                case "3.1.2":
                    r= zhibiaoService.computeCounty3_1_2(city,reportYear,null);
                    break;
                case "3.1.3":
                    r= zhibiaoService.computeCounty3_1_3(city,reportYear,null);
                    break;
                case "3.1.4":
                    r= zhibiaoService.computeCounty3_1_4(city,reportYear,null);
                    break;
                case "3.1.5":
                    r= zhibiaoService.computeCounty3_1_5(city,reportYear,null);
                    break;
                case "3.1.6":
                    r= zhibiaoService.computeCounty3_1_6(city,reportYear,null);
                    break;
                case "3.2.7":
                    r= zhibiaoService.computeCounty3_2_7(city,reportYear,null);
                    break;
                case "3.2.8":
                    r= zhibiaoService.computeCounty3_2_8(city,reportYear,null);
                    break;
                case "3.2.9":
                    r= zhibiaoService.computeCounty3_2_9(city,reportYear,null);
                    break;
                default:
                    break;
            }

            r.forEach(rr->{
                double num= Double.parseDouble(String.valueOf(rr.get("num")));
                Map<String,String> t=new HashMap<>();
                t.put("countyName", (String) rr.get("county"));
                t.put("percent",String.format("%.0f",num)+"/"+String.format("%.0f",totalNum));
                t.put("percentNum",String.format("%.2f",Math.round(num /totalNum*100)*0.01));
                t.put("num", String.valueOf(rr.get("num")));
                res.add(t);
            });
            res.sort(Comparator.comparingDouble(a -> Double.parseDouble(a.get("percentNum"))));
        }catch (Exception e){
            log.debug(e.getMessage());
            e.printStackTrace();
        }

        return Result.success(res);
    }

    /**
     * 每个区下面的各个街道有问题的社区占整个区中有问题的百分比
     */
    @ApiOperation("每个区下面的各个街道有问题的社区占整个区中有问题的百分比")
    @PostMapping("computeStreeyPercentCommunity")
    @ResponseBody
    public Result computeStreeyPercentCommunity(String city,String county,String indicatorId,String reportYear){
        List<Map<String,String>> res=new ArrayList<>();
        try {
            List<Map<String,Object>> result = null;
            //计算地市下每个区的占比
            List<Map<String,Object>> r=new ArrayList<>();
            switch (indicatorId){
                case "3.1.1":
                    r=zhibiaoService.computeStreet3_1_1(city,reportYear,county);
                    result=zhibiaoService.computeCounty3_1_1(city,reportYear,county);
                    break;
                case "3.1.2":
                    r= zhibiaoService.computeStreet3_1_2(city,reportYear,county);
                    result=zhibiaoService.computeCounty3_1_2(city,reportYear,county);
                    break;
                case "3.1.3":
                    r= zhibiaoService.computeStreet3_1_3(city,reportYear,county);
                    result=zhibiaoService.computeCounty3_1_3(city,reportYear,county);
                    break;
                case "3.1.4":
                    r= zhibiaoService.computeStreet3_1_4(city,reportYear,county);
                    result=zhibiaoService.computeCounty3_1_4(city,reportYear,county);
                    break;
                case "3.1.5":
                    r= zhibiaoService.computeStreet3_1_5(city,reportYear,county);
                    result=zhibiaoService.computeCounty3_1_5(city,reportYear,county);
                    break;
                case "3.1.6":
                    r= zhibiaoService.computeStreet3_1_6(city,reportYear,county);
                    result=zhibiaoService.computeCounty3_1_6(city,reportYear,county);
                    break;
                case "3.2.7":
                    r= zhibiaoService.computeStreet3_2_7(city,reportYear,county);
                    result=zhibiaoService.computeCounty3_2_7(city,reportYear,county);
                    break;
                case "3.2.8":
                    r= zhibiaoService.computeStreet3_2_8(city,reportYear,county);
                    result=zhibiaoService.computeCounty3_2_8(city,reportYear,county);
                    break;
                case "3.2.9":
                    r= zhibiaoService.computeStreet3_2_9(city,reportYear,county);
                    result=zhibiaoService.computeCounty3_2_9(city,reportYear,county);
                    break;
                default:
                    break;
            }
            assert result != null;
            double totalNum= Double.parseDouble(String.valueOf(result.get(0).get("num")));
            r.forEach(rr->{
                String num_t= String.valueOf(rr.get("num"));
                double num= Double.parseDouble(num_t) ;
                Map<String,String> t=new HashMap<>();
                t.put("countyName", (String) rr.get("street"));
                t.put("percent",String.format("%.0f",num)+"/"+String.format("%.0f",totalNum));
                t.put("percentNum",String.format("%.2f",Math.round(num /totalNum*100)*0.01));
                t.put("num", String.valueOf(rr.get("num")));
                res.add(t);
            });
            res.sort(Comparator.comparingDouble(a -> Double.parseDouble(a.get("percentNum"))));
        }catch (Exception e){
            e.printStackTrace();
            log.debug(e.getMessage());
        }


        return Result.success(res);
    }

    /**
     * 存在问题的社区
     */
    @ApiOperation(value = "存在问题的社区")
    @ResponseBody
    @PostMapping(value = "problemCommunity")
    public Result problemCommunity(
            @RequestParam(required = false) String reportYear,
            @RequestParam() String city,
            @RequestParam(required = false) String street,
            @RequestParam(required = false) String county,
            @RequestParam(required = false) String communityId
            ,@RequestBody(required = false) List<String> indicatorList,
            @RequestParam(required = false,defaultValue = "")String b3_1_4,
            @RequestParam(required = false,defaultValue = "")String e3_1_4,
            @RequestParam(required = false,defaultValue = "")String b3_1_5,
            @RequestParam(required = false,defaultValue = "")String e3_1_5,
            @RequestParam(required = false,defaultValue = "")String b3_1_6,
            @RequestParam(required = false,defaultValue = "")String e3_1_6,
            @RequestParam(required = false,defaultValue = "")String b3_1_8,
            @RequestParam(required = false,defaultValue = "")String e3_1_8,
            @RequestParam(required = false,defaultValue = "")String b3_1_9,
            @RequestParam(required = false,defaultValue = "")String e3_1_9,
            @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
            @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset){
        List<String> indicatorTotal= new ArrayList<>(Arrays.asList("3.1.1","3.1.2","3.1.3","3.1.4","3.1.5","3.1.6","3.2.7","3.2.8","3.2.9"));
        List<Map<String,Object>> list=zhibiaoService.problemCommunity(city,county,street,reportYear,communityId);
        list.forEach(l->{
            String communityIdF= (String) l.get("communityId");
            Result r=indicatorComputeCommunity(city,indicatorTotal,reportYear,communityIdF);
            Map<String,String> map= (Map<String, String>) r.getData();
            l.putAll(map);
        });
        //从结果中将符合indicatorList条件的数据过滤出来
        if(indicatorList.size()!=0){
            List<Map<String,Object>> tList=new ArrayList<>();
            list.forEach(rr->{
                int flag=0;
                for(String indicator:indicatorList){
                    if(rr.containsKey(indicator) && Double.parseDouble((String) rr.get(indicator))>0)flag++;
                }
                if(flag==indicatorList.size()){
                    tList.add(rr);
                }
            });
            list.clear();
            list.addAll(tList);
        }
        //筛选3_1_4的问题，小学学位缺口数
        if(b3_1_4!=null && !b3_1_4.equals("") && e3_1_4!=null && !e3_1_4.equals("")){
            List<Map<String,Object>> tList=new ArrayList<>();
            list.forEach(rr->{
                if(rr.containsKey("3.1.4") && Double.parseDouble((String) rr.get("3.1.4"))>=Double.parseDouble(b3_1_4) && Double.parseDouble((String) rr.get("3.1.4"))<=Double.parseDouble(e3_1_4)){
                    tList.add(rr);
                }
            });
            list.clear();
            list.addAll(tList);
        }
        //筛选3_1_5的问题，停车泊位缺口数
        if(b3_1_5!=null && !b3_1_5.equals("") && e3_1_5!=null && !e3_1_5.equals("")){
            List<Map<String,Object>> tList=new ArrayList<>();
            list.forEach(rr->{
                if(rr.containsKey("3.1.5") && Double.parseDouble((String) rr.get("3.1.5"))>=Double.parseDouble(b3_1_5) && Double.parseDouble((String) rr.get("3.1.5"))<=Double.parseDouble(e3_1_5)){
                    tList.add(rr);
                }
            });
            list.clear();
            list.addAll(tList);
        }
        //筛选3_1_6的问题，新能源汽车充电桩缺口数
        if(b3_1_6!=null && !b3_1_6.equals("") && e3_1_6!=null && !e3_1_6.equals("")){
            List<Map<String,Object>> tList=new ArrayList<>();
            list.forEach(rr->{
                if(rr.containsKey("3.1.6") && Double.parseDouble((String) rr.get("3.1.6"))>=Double.parseDouble(b3_1_6) && Double.parseDouble((String) rr.get("3.1.6"))<=Double.parseDouble(e3_1_6)){
                    tList.add(rr);
                }
            });
            list.clear();
            list.addAll(tList);
        }
        //筛选3_1_8的问题，停车泊位缺口数
        if(b3_1_8!=null && !b3_1_8.equals("") && e3_1_8!=null && !e3_1_8.equals("")){
            List<Map<String,Object>> tList=new ArrayList<>();
            list.forEach(rr->{
                if(rr.containsKey("3.1.8") && Double.parseDouble((String) rr.get("3.1.8"))>=Double.parseDouble(b3_1_8) && Double.parseDouble((String) rr.get("3.1.8"))<=Double.parseDouble(e3_1_8)){
                    tList.add(rr);
                }
            });
            list.clear();
            list.addAll(tList);
        }
        //筛选3_1_9的问题，未实施生活垃圾分类
        if(b3_1_9!=null && !b3_1_9.equals("") && e3_1_9!=null && !e3_1_9.equals("")){
            List<Map<String,Object>> tList=new ArrayList<>();
            list.forEach(rr->{
                if(rr.containsKey("3.1.9") && Double.parseDouble((String) rr.get("3.1.9"))>=Double.parseDouble(b3_1_9) && Double.parseDouble((String) rr.get("3.1.9"))<=Double.parseDouble(e3_1_9)){
                    tList.add(rr);
                }
            });
            list.clear();
            list.addAll(tList);
        }
        //手动分页 --狗头--
        List<Map<String,Object>> res_page;
        long endNum=pageSize*offset>list.size()?list.size():pageSize*offset;
        res_page=list.subList((int) (pageSize*(offset-1)), (int) endNum);
        //将数据和总数一起放到返回结果中
        Map<String,Object> res_map=new HashMap<>();
        res_map.put("res_page",res_page);
        res_map.put("totalNum",list.size());
        return Result.success(res_map);
    }
    /**
     * 存在问题的小区
     */
    @ApiOperation(value = "存在问题的小区")
    @ResponseBody
    @PostMapping(value ="problemCourtReal" )
    public Result problemCourtReal(@RequestParam() String city,
                                   @RequestParam(required = false,defaultValue = "")String county,
                                   @RequestParam(required = false,defaultValue = "")String street,
                                   @RequestParam(required = false,defaultValue = "")String communityId,
                                   @RequestParam(required = false,defaultValue = "")String communityName,
                                   @RequestParam(required = false,defaultValue = "")String courtType,
                                   @RequestParam(required = false,defaultValue = "")String remodel,
                                   @RequestParam(required = false,defaultValue = "")String management,
                                   @RequestParam(required = false,defaultValue = "")String bTime,
                                   @RequestParam(required = false,defaultValue = "")String eTime,
                                   @RequestParam(required = false,defaultValue = "")String bPeople,
                                   @RequestParam(required = false,defaultValue = "")String ePeople,
                                   @RequestParam(required = false,defaultValue = "")String b60People,
                                   @RequestParam(required = false,defaultValue = "")String e60People,
                                   @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
                                   @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset){
        List<Map<String,Object>> l=zhibiaoService.problemCourtReal(city,county,street,communityId,communityName,
                courtType,remodel,management,
                bTime,eTime,
                bPeople,ePeople,
                b60People,e60People);

        //手动分页
        List<Map<String,Object>> res_page;
        long endNum=pageSize*offset>l.size()?l.size():pageSize*offset;
        res_page=l.subList((int) (pageSize*(offset-1)), (int) endNum);

        //将数据和总数一起放到返回结果中
        Map<String,Object> res_map=new HashMap<>();
        res_map.put("res_page",res_page);
        res_map.put("totalNum",l.size());
        return Result.success(res_map);
    }

    /**
     * 查询社区的问题清单
     */
    @ApiOperation(value = "查询社区的问题清单")
    @ResponseBody
    @PostMapping(value = "problmCommunityDetail")
    public Result problmCommunityDetail(
            @RequestParam(required = false) String reportYear,
            @RequestParam() String city,
            @RequestParam(required = false) String street,
            @RequestParam(required = false) String county,
            @RequestParam(required = false) String communityId,
            @RequestParam(required = false,defaultValue = "") String indcatorId,
            @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
            @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset){
        List<Map<String,Object>> list=zhibiaoService.problemCommunity(city,county,street,reportYear,communityId);
        List<String> indicatorTotal= new ArrayList<>(Arrays.asList("3.1.1","3.1.2","3.1.3","3.1.4","3.1.5","3.1.6","3.2.7","3.2.8","3.2.9"));
        List<Map<String,Object>> res=new ArrayList<>();
        list.forEach(l->{
            String communityIdF= (String) l.get("communityId");
            if(indcatorId!=null && !indcatorId.equals("")){
                indicatorTotal.clear();
                indicatorTotal.add(indcatorId);
            }
            Result r=indicatorComputeCommunity(city,indicatorTotal,reportYear,communityIdF);
            Map<String,String> map= (Map<String, String>) r.getData();
            map.forEach((key, value) -> {
                Map<String,Object> t=new HashMap<>(l);
                t.put(key,value);
                t.put("indicatorId",key);
                //根据社区id和indicatorId取出现问题的详细描述
                String problemStr=communityProblemDetail(communityIdF,city,key,reportYear);
                t.put("problemConcat",problemStr);
                if(key.equals("3.1.2") && problemStr!=null && !problemStr.equals("")){
                    t.put("indicatorDetail","3.1.2.3.1");
                }
                if(key.equals("3.1.3") && problemStr!=null && !problemStr.equals("")){
                    t.put("indicatorDetail","3.1.3.3.1");
                }
                if(key.equals("3.1.6") && problemStr!=null && !problemStr.equals("")){
                    t.put("indicatorDetail","3.1.6.2.1");
                }
                //因为3.1.4中并没有问题，所以这条记录并不返回给前段
                if(!key.equals("3.1.4"))
                    res.add(t);

            });
        });
        //手动分页
        List<Map<String,Object>> res_page;
        long endNum=pageSize*offset>res.size()?res.size():pageSize*offset;
        res_page=res.subList((int) (pageSize*(offset-1)), (int) endNum);

        //将数据和总数一起放到返回结果中
        Map<String,Object> res_map=new HashMap<>();
        res_map.put("res_page",res_page);
        res_map.put("totalNum",res.size());
        return Result.success(res_map);
    }


    public String communityProblemDetail(String communityId,String city,String indicatorId,String reportYear){
        Map<String,Object> map = null;
        switch (indicatorId){
            case "3.1.1":
                map=zhibiaoService.communityProblemDetail3_1_1(communityId,reportYear);
                break;
            case "3.1.2":
                map=zhibiaoService.communityProblemDetail3_1_2(communityId,reportYear);
                break;
            case "3.1.3":
                map=zhibiaoService.communityProblemDetail3_1_3(communityId,reportYear);
                break;
            case "3.1.4":

                break;
            case "3.1.5":
                map=zhibiaoService.communityProblemDetail3_1_5(communityId,reportYear);
                break;
            case "3.1.6":
                map=zhibiaoService.communityProblemDetail3_1_6(communityId,reportYear);
                break;
            case "3.2.7":
                map=zhibiaoService.communityProblemDetail3_2_7(communityId,reportYear);
                break;
            case "3.2.8":
                map=zhibiaoService.communityProblemDetail3_2_8(communityId,reportYear);
                break;
            case "3.2.9":
                map=zhibiaoService.communityProblemDetail3_2_9(communityId,reportYear);
                break;
            default:

        }


        List<String> list= new ArrayList<>();
        if(map!=null){
            map.forEach((k, v)->{
                if(v!=null && !v.equals("")){
                    list.add((String) v);
                }
            });
        }

        return StringUtil.join(",", list.toArray());
    }


    @Override
    public void run(String... args) throws Exception {
        log.debug("数据采集系统启动");
    }
}
