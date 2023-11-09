package com.example.atv.controller;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.atv.constant.Result;
import com.example.atv.dao.mapper.AtvService;
import com.example.atv.generatetor.entity.QuestionRecord;
import com.example.atv.generatetor.service.IQuestionRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.Parameter;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


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
    public Result compute(@RequestBody List<String> list,@RequestParam String city,@RequestParam String reportYear,@RequestParam String province){
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


    @Override
    public void run(String... args) throws Exception {
        log.debug("QQQQQQQQQQQQQQQ");
    }
}
