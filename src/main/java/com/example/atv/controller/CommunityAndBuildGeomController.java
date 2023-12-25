package com.example.atv.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.atv.constant.Result;
import com.example.atv.generatetor.entity.SearchParams;
import com.example.atv.generatetor.service.CommunityAndBuildGeomService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @ProjectName: querySystem
 * @ClassName: com.example.atv.controller.CommunityPGController
 * @Description: pg社区边界查询
 * @Author: ZHANG MIAO
 * @Date: 2023/12/19 16:37
 **/
@Slf4j
@RestController
@RequestMapping("/api/communityAndBuildGeom")
public class CommunityAndBuildGeomController {
    @Autowired
    private CommunityAndBuildGeomService communityAndBuildGeomService;

    /**
     * 获取台账，或所有社区边界图形信息
     *
     * @param searchParams
     * @return
     */
    @PostMapping("communityGeomInfo")
    public Result selectAllCommunityGeom(@ModelAttribute SearchParams searchParams) {
        Result result = communityAndBuildGeomService.selectAllCommunityGeom(searchParams);
        return result;
    }

    /**
     * 社区指标诊断，地图
     *
     * @param searchParams
     * @return
     */
    @PostMapping("communityIndicatorDiagnosis")
    public Result communityIndicatorDiagnosisGeom(@ModelAttribute SearchParams searchParams) {
        Result result = communityAndBuildGeomService.communityIndicatorDiagnosisGeom(searchParams);
        return result;
    }

    /**
     * 住房指标真毒地图信息
     *
     * @return
     */
    @PostMapping("buildIndicatorDiagnosis")
    public Result buildIndicatorDiagnosis(@ModelAttribute SearchParams searchParams) {
        Result result = communityAndBuildGeomService.buildIndicatorDiagnosis(searchParams);
        return result;
    }

    /**
     * 住房台账地图展示
     *
     * @param jsonObject
     * @return
     */
    @PostMapping("buildGeomInfo")
    public Result buildGeomInfo(@RequestBody JSONObject jsonObject) {
        List<Map> buildSimpleInfo = jsonObject.getObject("buildSimpleInfo", List.class);
        String year = jsonObject.getString("year");
        Result result = communityAndBuildGeomService.buildGeomInfo(buildSimpleInfo, year);
        return result;
    }

    /**
     * 获取辅助图层
     *
     * @param province
     * @param city
     * @return
     */
    @PostMapping("getAuxiliaryLayer")
    public Result selectAuxiliaryLayer(@RequestParam String province, @RequestParam String city) {
        Result result = communityAndBuildGeomService.selectAuxiliaryLayer(province, city);
        return result;
    }

    /**
     * 获取各区县中心坐标
     *
     * @param province
     * @param city
     * @return
     */
    @PostMapping("getCountyCenterPoint")
    public Result getCountyCenterPoint(@RequestParam String province, @RequestParam String city) {
        Result result = communityAndBuildGeomService.getCountyCenterPoint(province, city);
        return result;
    }
}
