package com.example.atv.generatetor.service.impl;

import com.example.atv.config.datasource.DataSourceContextHolder;
import com.example.atv.config.datasource.DataSourceSet;
import com.example.atv.constant.Result;
import com.example.atv.generatetor.entity.SearchParams;
import com.example.atv.generatetor.mapper.CommunityAndBuildGeomMapper;
import com.example.atv.generatetor.service.CommunityAndBuildGeomService;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ProjectName: querySystem
 * @ClassName: com.example.atv.generatetor.service.impl.CommunityAndBuildGeomServiceImpl
 * @Description:
 * @Author: ZHANG MIAO
 * @Date: 2023/12/19 16:48
 **/
@Service
public class CommunityAndBuildGeomServiceImpl implements CommunityAndBuildGeomService {
    @Autowired
    CommunityAndBuildGeomMapper communityAndBuildGeomMapper;
    @Override
    @DataSourceSet("slave")
    public Result selectAllCommunityGeom(SearchParams searchParams) {
        //手动设置数据源
        DataSourceContextHolder.setDataSource("slave");
        List<JSONObject> list= communityAndBuildGeomMapper.selectAllCommunityGeom(searchParams);
        DataSourceContextHolder.setDataSource("master");

        return Result.success(list);
    }

    @Override
    public Result selectBuildGeom() {
        return null;
    }
}
