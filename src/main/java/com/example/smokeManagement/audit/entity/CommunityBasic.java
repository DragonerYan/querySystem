package com.example.smokeManagement.audit.entity;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.Year;

@Data
public class CommunityBasic {

    private String communityId;

    private BigDecimal area;

    private Integer numberPeople;

    private Integer numberCourt;

    private Integer numberFamily;

    private Integer state;

    private LocalDateTime dateTime;

    private String userId;

    private Year reportYear;
}
