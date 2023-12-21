package com.example.atv.generatetor.entity;

import lombok.Data;

import java.util.List;

/**
 * @ProjectName: querySystem_2
 * @ClassName: com.example.atv.generatetor.entity.CommunityGeomInfo
 * @Description:
 * @Author: ZHANG MIAO
 * @Date: 2023/12/21 10:24
 **/
@Data
public class CountyGeomInfo {
    private String county;
    private List<CommunityInfo> communityInfoList;
    private Object countyGeom;
    private int countNum;


}
