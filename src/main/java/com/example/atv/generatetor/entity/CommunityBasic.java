package com.example.atv.generatetor.entity;

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
 * @author yxz
 * @since 2023-07-04
 */
@TableName("community_basic")
@ApiModel(value = "CommunityBasic对象", description = "")
public class CommunityBasic implements Serializable {

    private static final long serialVersionUID = 1L;

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

    private String reportYear;

    private String province;

    private String city;

    private String county;

    private String street;

    private String communityName;

    private String reviewComment;

    @ApiModelProperty("常住人口年龄构成：0-3岁（含3岁）（宁波）")
    private Integer age03;

    @ApiModelProperty("60岁及以上（宁波）")
    private Integer age60;

    @ApiModelProperty("65岁及以上（宁波）")
    private Integer age65;


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

    public Integer getAge03() {
        return age03;
    }

    public void setAge03(Integer age03) {
        this.age03 = age03;
    }

    public Integer getAge60() {
        return age60;
    }

    public void setAge60(Integer age60) {
        this.age60 = age60;
    }

    public Integer getAge65() {
        return age65;
    }

    public void setAge65(Integer age65) {
        this.age65 = age65;
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
        ", province=" + province +
        ", city=" + city +
        ", county=" + county +
        ", street=" + street +
        ", communityName=" + communityName +
        ", reviewComment=" + reviewComment +
        ", age03=" + age03 +
        ", age60=" + age60 +
        ", age65=" + age65 +
        "}";
    }
}
