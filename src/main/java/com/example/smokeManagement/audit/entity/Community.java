package com.example.smokeManagement.audit.entity;

import java.io.Serializable;

import com.baomidou.mybatisplus.annotation.TableName;
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
@TableName("community")
@ApiModel(value = "Community对象", description = "")
public class Community implements Serializable {

    private static final long serialVersionUID = 1L;

    private String province;

    private String city;

    private String county;

    private Float latitude;

    private Float longitude;

    private String street;

    private Float area;

    private String countyId;

    private String communityId;

    private String userId;

    private String communityName;


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

    public Float getlatitude() {
        return latitude;
    }

    public void setlatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getlongitude() {
        return longitude;
    }

    public void setlongitude(Float longitude) {
        this.longitude = longitude;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Float getArea() {
        return area;
    }

    public void setArea(Float area) {
        this.area = area;
    }

    public String getCountyId() {
        return countyId;
    }

    public void setCountyId(String countyId) {
        this.countyId = countyId;
    }

    public String getCommunityId() {
        return communityId;
    }

    public void setCommunityId(String communityId) {
        this.communityId = communityId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCommunityName() {
        return communityName;
    }

    public void setCommunityName(String communityName) {
        this.communityName = communityName;
    }

    @Override
    public String toString() {
        return "Community{" +
        "province=" + province +
        ", city=" + city +
        ", county=" + county +
        ", latitude=" + latitude +
        ", longitude=" + longitude +
        ", street=" + street +
        ", area=" + area +
        ", countyId=" + countyId +
        ", communityId=" + communityId +
        ", userId=" + userId +
        ", communityName=" + communityName +
        "}";
    }
}
