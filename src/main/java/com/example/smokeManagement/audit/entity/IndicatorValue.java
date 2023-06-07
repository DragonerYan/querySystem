package com.example.smokeManagement.audit.entity;

import lombok.Data;

import java.time.Year;

@Data
public class IndicatorValue {

    private String communityId;

    private String courtName;

    private String indicatorId;

    private Integer indicatorValue;

    private String meno;

    private Float longitude;

    private Float latitude;

    private Year reportYear;
}
