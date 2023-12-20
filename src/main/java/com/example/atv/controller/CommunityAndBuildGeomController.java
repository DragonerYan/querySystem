package com.example.atv.controller;

import com.example.atv.constant.Result;
import com.example.atv.generatetor.entity.SearchParams;
import com.example.atv.generatetor.service.CommunityAndBuildGeomService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @PostMapping("communityGeomInfo")
    public Result selectAllCommunityGeom(@ModelAttribute SearchParams searchParams){
        Result result = communityAndBuildGeomService.selectAllCommunityGeom(searchParams);
        return result;
    }
    public Result selectBuildGeom(){
        return null;
    }
}
