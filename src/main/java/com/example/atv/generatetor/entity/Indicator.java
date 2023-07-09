package com.example.atv.generatetor.entity;

import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * <p>
 * 
 * </p>
 *
 * @author yxz
 * @since 2023-07-09
 */
@ApiModel(value = "Indicator对象", description = "")
public class Indicator implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("0表示court 1表示community")
    private Integer courtOrCommunity;

    private String indicatorId;

    private String indicatorName;

    private String parentId;

    @ApiModelProperty("0表示为是否值  1表示为整数值")
    private Integer type;

    private String liangGang;


    public Integer getCourtOrCommunity() {
        return courtOrCommunity;
    }

    public void setCourtOrCommunity(Integer courtOrCommunity) {
        this.courtOrCommunity = courtOrCommunity;
    }

    public String getIndicatorId() {
        return indicatorId;
    }

    public void setIndicatorId(String indicatorId) {
        this.indicatorId = indicatorId;
    }

    public String getIndicatorName() {
        return indicatorName;
    }

    public void setIndicatorName(String indicatorName) {
        this.indicatorName = indicatorName;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getLiangGang() {
        return liangGang;
    }

    public void setLiangGang(String liangGang) {
        this.liangGang = liangGang;
    }

    @Override
    public String toString() {
        return "Indicator{" +
        "courtOrCommunity=" + courtOrCommunity +
        ", indicatorId=" + indicatorId +
        ", indicatorName=" + indicatorName +
        ", parentId=" + parentId +
        ", type=" + type +
        ", liangGang=" + liangGang +
        "}";
    }
}
