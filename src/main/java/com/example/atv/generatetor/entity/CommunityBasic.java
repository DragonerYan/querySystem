package com.example.atv.generatetor.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * <p>
 * 
 * </p>
 *
 * @author baomidou
 * @since 2023-06-09
 */
@TableName("community_basic")
@ApiModel(value = "CommunityBasic对象", description = "")
public class CommunityBasic implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("面积")
    @TableId("community_id")
    private String communityId;

    @TableField("area")
    private BigDecimal area;

    @TableField("number_people")
    private Integer numberPeople;

    @TableField("number_court")
    private Integer numberCourt;

    @TableField("number_family")
    private Integer numberFamily;

    @ApiModelProperty("0是暂存，1是审核中，2是通过，3是不通过")
    @TableField("state")
    private Integer state;

    @ApiModelProperty("填报时间")
    @TableField("date_time")
    private LocalDateTime dateTime;

    @TableField("user_id")
    private String userId;

    @TableId("report_year")
    private String reportYear;


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

    public String getReportYear() {
        return reportYear;
    }

    public void setReportYear(String reportYear) {
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
