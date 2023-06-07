package com.example.smokeManagement.audit.entity;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class CourtBasic {
    private String communityId;

    private String courtName;

    private String courtType;

    private String courtTypeOther;

    private Integer buildTime;

    private String remodel;

    private Integer management;

    private BigDecimal area;

    private Integer numberDepartment;

    private Integer numberPeople;

    private Integer numberOver60People;

    private Integer numberBuilding;

    private Integer number13Building;

    private Integer number46Building;

    private Integer number79Building;

    private Integer numberOver10Building;

    private LocalDateTime dateTime;

    private Integer state;

    private String userId;

    private Integer reportYear;

    private String updateBy;

    private String createBy;

    private LocalDateTime createTime;

    private LocalDateTime updateTime;
}
