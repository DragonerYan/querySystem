package com.example.atv.generatetor.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * <p>
 * 
 * </p>
 *
 * @author yxz
 * @since 2023-07-04
 */
@TableName("build_basic")
@ApiModel(value = "BuildBasic对象", description = "")
public class BuildBasic implements Serializable {

    private static final long serialVersionUID = 1L;

    private String province;

    private String city;

    private String county;

    private String street;

    private String communityId;

    private String courtName;

    @ApiModelProperty("住宅楼号")
    private String buildNumber;

    @ApiModelProperty("建造时间")
    private Integer buildTime;

    @ApiModelProperty("常住人口")
    private Integer numberPeople;

    @ApiModelProperty("60岁以上常住人口")
    private Integer numberOver60People;

    @ApiModelProperty("单元数")
    private Integer unitsNumber;

    @ApiModelProperty("建筑层数")
    private Integer numberDepartment;

    @ApiModelProperty("填报时间")
    private LocalDateTime dateTime;

    @ApiModelProperty("0为暂存，1为提交，2为通过，3为不通过")
    private Integer state;

    private String userId;

    private String reportYear;

    private String communityName;

    private String reviewComment;

    private String problemState;


    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCommunityId() {
        return communityId;
    }

    public void setCommunityId(String communityId) {
        this.communityId = communityId;
    }

    public String getCourtName() {
        return courtName;
    }

    public void setCourtName(String courtName) {
        this.courtName = courtName;
    }

    public String getBuildNumber() {
        return buildNumber;
    }

    public void setBuildNumber(String buildNumber) {
        this.buildNumber = buildNumber;
    }

    public Integer getBuildTime() {
        return buildTime;
    }

    public void setBuildTime(Integer buildTime) {
        this.buildTime = buildTime;
    }

    public Integer getNumberPeople() {
        return numberPeople;
    }

    public void setNumberPeople(Integer numberPeople) {
        this.numberPeople = numberPeople;
    }

    public Integer getNumberOver60People() {
        return numberOver60People;
    }

    public void setNumberOver60People(Integer numberOver60People) {
        this.numberOver60People = numberOver60People;
    }

    public Integer getUnitsNumber() {
        return unitsNumber;
    }

    public void setUnitsNumber(Integer unitsNumber) {
        this.unitsNumber = unitsNumber;
    }

    public Integer getNumberDepartment() {
        return numberDepartment;
    }

    public void setNumberDepartment(Integer numberDepartment) {
        this.numberDepartment = numberDepartment;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
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

    public String getCommunityName() {
        return communityName;
    }

    public void setCommunityName(String communityName) {
        this.communityName = communityName;
    }

    public String getReviewComment() {
        return reviewComment;
    }

    public void setReviewComment(String reviewComment) {
        this.reviewComment = reviewComment;
    }

    public String getProblemState() {
        return problemState;
    }

    public void setProblemState(String problemState) {
        this.problemState = problemState;
    }

    @Override
    public String toString() {
        return "BuildBasic{" +
        "province=" + province +
        ", city=" + city +
        ", county=" + county +
        ", street=" + street +
        ", communityId=" + communityId +
        ", courtName=" + courtName +
        ", buildNumber=" + buildNumber +
        ", buildTime=" + buildTime +
        ", numberPeople=" + numberPeople +
        ", numberOver60People=" + numberOver60People +
        ", unitsNumber=" + unitsNumber +
        ", numberDepartment=" + numberDepartment +
        ", dateTime=" + dateTime +
        ", state=" + state +
        ", userId=" + userId +
        ", reportYear=" + reportYear +
        ", communityName=" + communityName +
        ", reviewComment=" + reviewComment +
        ", problemState=" + problemState +
        "}";
    }
}
