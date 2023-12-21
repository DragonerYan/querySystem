package com.example.atv.generatetor.service;

import com.example.atv.constant.Result;
import com.example.atv.generatetor.entity.SearchParams;

/**
 * @ProjectName: querySystem
 * @ClassName: com.example.atv.generatetor.service.CommunityAndBuildGeomService
 * @Description:
 * @Author: ZHANG MIAO
 * @Date: 2023/12/19 16:46
 **/
public interface CommunityAndBuildGeomService {
    /**
     * 获取社区边界等信息
     *
     * @return
     */
    Result selectAllCommunityGeom(SearchParams searchParams);
    /**
     * 社区指标诊断，地图
     * @param searchParams
     * @return
     */
    Result communityIndicatorDiagnosisGeom(SearchParams searchParams);

    /**
     * 获取楼栋坐标等信息
     *
     * @return
     */
    Result selectBuildGeom();

    /**
     * 查询辅助图层
     *
     * @param county
     * @param city
     * @return
     */
    Result selectAuxiliaryLayer(String county, String city);

}
