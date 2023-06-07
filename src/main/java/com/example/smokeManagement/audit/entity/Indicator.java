package com.example.smokeManagement.audit.entity;

import lombok.Data;

@Data
public class Indicator {
    private Integer courtOrCommunity;

    private String indicatorId;

    private String indicatorName;

    private String parentId;

    private Integer type;

    private String liangGang;
}
