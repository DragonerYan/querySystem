package com.example.atv.controller;

import com.example.atv.constant.Result;
import com.example.atv.generatetor.entity.SearchParams;
import com.example.atv.generatetor.service.CommunityAndBuildGeomService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    public Result selectBuildGeom() {
        return null;
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
}
