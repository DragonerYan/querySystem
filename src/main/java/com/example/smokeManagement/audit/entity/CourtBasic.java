package com.example.smokeManagement.audit.entity;

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
 * @since 2023-06-08
 */
@TableName("court_basic")
@ApiModel(value = "CourtBasic对象", description = "")
public class CourtBasic implements Serializable {

    private static final long serialVersionUID = 1L;

    private String province;

    private String city;

    private String county;

    private String street;

    private String communityId;

    private String courtName;

    @ApiModelProperty("1 商品房，2 保障房，3 历史文化街区，0 其他----")
    private String courtType;

    @ApiModelProperty("其他")
    private String courtTypeOther;

    @ApiModelProperty("建造时间")
    private Integer buildTime;

    @ApiModelProperty("1 未开展，2 进行中，3 已完成")
    private String remodel;

    @ApiModelProperty("0 有物业 1无物业")
    private Integer management;

    @ApiModelProperty("平方米小区总建筑面积")
    private BigDecimal area;

    @ApiModelProperty("住宅总套数")
    private Integer numberDepartment;

    @ApiModelProperty("人数")
    private Integer numberPeople;

    @ApiModelProperty("60岁以上常住人口")
    private Integer numberOver60People;

    @ApiModelProperty("建筑数量")
    private Integer numberBuilding;

    @ApiModelProperty("1-3层建筑数量")
    private Integer number13Building;

    @ApiModelProperty("4-6层建筑数量")
    private Integer number46Building;

    @ApiModelProperty("7-9层建筑数量")
    private Integer number79Building;

    @ApiModelProperty("10 层以上建筑数量")
    private Integer numberOver10Building;

    @ApiModelProperty("填报时间")
    private LocalDateTime dateTime;

    @ApiModelProperty("0为暂存，1为已提交，2为通过，3为不通过")
    private Integer state;

    private String userId;

    private Integer reportYear;


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

    public String getCourtType() {
        return courtType;
    }

    public void setCourtType(String courtType) {
        this.courtType = courtType;
    }

    public String getCourtTypeOther() {
        return courtTypeOther;
    }

    public void setCourtTypeOther(String courtTypeOther) {
        this.courtTypeOther = courtTypeOther;
    }

    public Integer getBuildTime() {
        return buildTime;
    }

    public void setBuildTime(Integer buildTime) {
        this.buildTime = buildTime;
    }

    public String getRemodel() {
        return remodel;
    }

    public void setRemodel(String remodel) {
        this.remodel = remodel;
    }

    public Integer getManagement() {
        return management;
    }

    public void setManagement(Integer management) {
        this.management = management;
    }

    public BigDecimal getArea() {
        return area;
    }

    public void setArea(BigDecimal area) {
        this.area = area;
    }

    public Integer getNumberDepartment() {
        return numberDepartment;
    }

    public void setNumberDepartment(Integer numberDepartment) {
        this.numberDepartment = numberDepartment;
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

    public Integer getNumberBuilding() {
        return numberBuilding;
    }

    public void setNumberBuilding(Integer numberBuilding) {
        this.numberBuilding = numberBuilding;
    }

    public Integer getNumber13Building() {
        return number13Building;
    }

    public void setNumber13Building(Integer number13Building) {
        this.number13Building = number13Building;
    }

    public Integer getNumber46Building() {
        return number46Building;
    }

    public void setNumber46Building(Integer number46Building) {
        this.number46Building = number46Building;
    }

    public Integer getNumber79Building() {
        return number79Building;
    }

    public void setNumber79Building(Integer number79Building) {
        this.number79Building = number79Building;
    }

    public Integer getNumberOver10Building() {
        return numberOver10Building;
    }

    public void setNumberOver10Building(Integer numberOver10Building) {
        this.numberOver10Building = numberOver10Building;
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

    public Integer getReportYear() {
        return reportYear;
    }

    public void setReportYear(Integer reportYear) {
        this.reportYear = reportYear;
    }

    @Override
    public String toString() {
        return "CourtBasic{" +
        "province=" + province +
        ", city=" + city +
        ", county=" + county +
        ", street=" + street +
        ", communityId=" + communityId +
        ", courtName=" + courtName +
        ", courtType=" + courtType +
        ", courtTypeOther=" + courtTypeOther +
        ", buildTime=" + buildTime +
        ", remodel=" + remodel +
        ", management=" + management +
        ", area=" + area +
        ", numberDepartment=" + numberDepartment +
        ", numberPeople=" + numberPeople +
        ", numberOver60People=" + numberOver60People +
        ", numberBuilding=" + numberBuilding +
        ", number13Building=" + number13Building +
        ", number46Building=" + number46Building +
        ", number79Building=" + number79Building +
        ", numberOver10Building=" + numberOver10Building +
        ", dateTime=" + dateTime +
        ", state=" + state +
        ", userId=" + userId +
        ", reportYear=" + reportYear +
        "}";
    }
}
