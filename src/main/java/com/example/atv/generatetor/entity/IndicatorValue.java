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
 * @since 2023-06-10
 */
@TableName("indicator_value")
@ApiModel(value = "IndicatorValue对象", description = "")
public class IndicatorValue implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("community_id")
    private String communityId;

    @ApiModelProperty("可以为空 为空时表示社区")
    @TableId("court_name")
    private String courtName;

    @TableId("indicator_id")
    private String indicatorId;

    @ApiModelProperty("1为是 0为否   具体数值")
    @TableField("indicator_value")
    private Integer indicatorValue;

    @TableField("meno")
    private String meno;

    @TableField("longitude")
    private Float longitude;

    @TableField("latitude")
    private Float latitude;

    @TableId("report_year")
    private String reportYear;


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

    @Override
    public String toString() {
        return "IndicatorValue{" +
        "communityId=" + communityId +
        ", courtName=" + courtName +
        ", indicatorId=" + indicatorId +
        ", indicatorValue=" + indicatorValue +
        ", meno=" + meno +
        ", longitude=" + longitude +
        ", latitude=" + latitude +
        ", reportYear=" + reportYear +
        "}";
    }
}
