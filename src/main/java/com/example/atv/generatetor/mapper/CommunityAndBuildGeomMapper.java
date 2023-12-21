package com.example.atv.generatetor.mapper;

import com.example.atv.generatetor.entity.SearchParams;
import net.sf.json.JSONObject;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;
import java.util.Objects;

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
     *
     * @return
     */
    List<net.sf.json.JSONObject> selectAllCommunityGeom(SearchParams searchParams);

    List<JSONObject> selectAllCountyGeom(@Param("province") String province,
                                          @Param("city") String city);

    /**
     * 获取楼栋 坐标等信息
     *
     * @return
     */
    JSONObject selectBuildGeom();

    List<Map<String, Object>> selectAuxiliaryLayer(@Param("province") String province,
                                                    @Param("city") String city);

    List<Map<String, Object>> communityIndicator_311(SearchParams searchParams);
}
