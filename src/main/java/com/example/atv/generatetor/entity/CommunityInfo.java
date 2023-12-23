package com.example.atv.generatetor.entity;

import lombok.Data;
import net.sf.json.JSONObject;

/**
 * @ProjectName: querySystem_2
 * @ClassName: com.example.atv.generatetor.entity.CommunityInfo
 * @Description:
 * @Author: ZHANG MIAO
 * @Date: 2023/12/21 11:19
 **/
@Data
public class CommunityInfo {
    private String street;
    private String communityId;
    private String communityName;
    private Object communityGeom;
}
