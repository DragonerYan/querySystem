package com.example.atv.generatetor.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * <p>
 * 
 * </p>
 *
 * @author yxz
 * @since 2023-06-14
 */
@TableName("community")
@ApiModel(value = "Community对象", description = "")
public class Community implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("province")
    private String province;

    @TableId("city")
    private String city;

    @TableId("county")
    private String county;

    @TableField("latitude")
    private Float latitude;

    @TableField("longitude")
    private Float longitude;

    @TableId("street")
    private String street;

    @TableField("area")
    private Float area;

    @TableField("county_id")
    private String countyId;

    @TableId("community_id")
    private String communityId;

    @TableField("user_id")
    private String userId;

    @TableField("community_name")
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

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
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
