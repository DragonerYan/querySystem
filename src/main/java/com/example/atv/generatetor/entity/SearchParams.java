package com.example.atv.generatetor.entity;

import lombok.Data;

import java.util.List;

/**
 * @ProjectName: querySystem
 * @ClassName: com.example.atv.generatetor.entity.SearchParams
 * @Description: 查询参数
 * @Author: ZHANG MIAO
 * @Date: 2023/12/20 09:12
 **/
@Data
public class SearchParams {
    /**
     * 社区id集合
     */
    private List<String> communitiesIds;
    /**
     *  社区idstr
     */
    private String communitiesIdsStr;

    private String city;
    private String county;
    private String street;
    private String communityName;
    private String buildName;
    private String buildsIdsStr;
    private List<String> buildsIds;
}
