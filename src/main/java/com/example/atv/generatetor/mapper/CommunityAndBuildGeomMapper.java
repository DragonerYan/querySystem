package com.example.atv.generatetor.mapper;

import com.example.atv.generatetor.entity.SearchParams;
import net.sf.json.JSONObject;

import java.util.List;

/**
 * @ProjectName: querySystem
 * @ClassName: com.example.atv.generatetor.mapper.CommunityAndBuildGeomMapper
 * @Description:
 * @Author: ZHANG MIAO
 * @Date: 2023/12/19 16:48
 **/
public interface CommunityAndBuildGeomMapper {

    /**
     * 获取社区边界等信息
     * @return
     */
    List<JSONObject> selectAllCommunityGeom(SearchParams searchParams);

    /**
     * 获取楼栋 坐标等信息
     * @return
     */
    JSONObject selectBuildGeom();

}
