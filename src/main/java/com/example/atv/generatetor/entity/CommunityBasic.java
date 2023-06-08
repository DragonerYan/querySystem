package com.example.atv.generatetor.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.Year;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * <p>
 * 
 * </p>
 *
 * @author baomidou
 * @since 2023-06-08
 */
@TableName("community_basic")
@ApiModel(value = "CommunityBasic对象", description = "")
public class CommunityBasic implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("面积")
    private String communityId;

    private BigDecimal area;

    private Integer numberPeople;

    private Integer numberCourt;

    private Integer numberFamily;

    @ApiModelProperty("0是暂存，1是审核中，2是通过，3是不通过")
    private Integer state;

    @ApiModelProperty("填报时间")
    private LocalDateTime dateTime;

    private String userId;

    private Year reportYear;


    public String getCommunityId() {
        return communityId;
    }

    public void setCommunityId(String communityId) {
        this.communityId = communityId;
    }

    public BigDecimal getArea() {
        return area;
    }

    public void setArea(BigDecimal area) {
        this.area = area;
    }

    public Integer getNumberPeople() {
        return numberPeople;
    }

    public void setNumberPeople(Integer numberPeople) {
        this.numberPeople = numberPeople;
    }

    public Integer getNumberCourt() {
        return numberCourt;
    }

    public void setNumberCourt(Integer numberCourt) {
        this.numberCourt = numberCourt;
    }

    public Integer getNumberFamily() {
        return numberFamily;
    }

    public void setNumberFamily(Integer numberFamily) {
        this.numberFamily = numberFamily;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Year getReportYear() {
        return reportYear;
    }

    public void setReportYear(Year reportYear) {
        this.reportYear = reportYear;
    }

    @Override
    public String toString() {
        return "CommunityBasic{" +
        "communityId=" + communityId +
        ", area=" + area +
        ", numberPeople=" + numberPeople +
        ", numberCourt=" + numberCourt +
        ", numberFamily=" + numberFamily +
        ", state=" + state +
        ", dateTime=" + dateTime +
        ", userId=" + userId +
        ", reportYear=" + reportYear +
        "}";
    }
}
