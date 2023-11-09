package com.example.atv.generatetor.entity;

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
 * @since 2023-11-09
 */
@TableName("indicator_value_build")
@ApiModel(value = "IndicatorValueBuild对象", description = "")
public class IndicatorValueBuild implements Serializable {

    private static final long serialVersionUID = 1L;

    private String communityId;

    private String courtName;

    private String indicatorId;

    private Integer indicatorValue;

    private String meno;

    private Float longitude;

    private Float latitude;

    private String reportYear;

    private String buildNumber;

    private String photoPath;

    private String description;

    private String location;


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

    public String getIndicatorId() {
        return indicatorId;
    }

    public void setIndicatorId(String indicatorId) {
        this.indicatorId = indicatorId;
    }

    public Integer getIndicatorValue() {
        return indicatorValue;
    }

    public void setIndicatorValue(Integer indicatorValue) {
        this.indicatorValue = indicatorValue;
    }

    public String getMeno() {
        return meno;
    }

    public void setMeno(String meno) {
        this.meno = meno;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public String getReportYear() {
        return reportYear;
    }

    public void setReportYear(String reportYear) {
        this.reportYear = reportYear;
    }

    public String getBuildNumber() {
        return buildNumber;
    }

    public void setBuildNumber(String buildNumber) {
        this.buildNumber = buildNumber;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "IndicatorValueBuild{" +
        "communityId=" + communityId +
        ", courtName=" + courtName +
        ", indicatorId=" + indicatorId +
        ", indicatorValue=" + indicatorValue +
        ", meno=" + meno +
        ", longitude=" + longitude +
        ", latitude=" + latitude +
        ", reportYear=" + reportYear +
        ", buildNumber=" + buildNumber +
        ", photoPath=" + photoPath +
        ", description=" + description +
        ", location=" + location +
        "}";
    }
}
