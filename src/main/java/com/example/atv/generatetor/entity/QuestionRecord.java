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
@TableName("question_record")
@ApiModel(value = "QuestionRecord对象", description = "")
public class QuestionRecord implements Serializable {

    private static final long serialVersionUID = 1L;

    private String province;

    private String city;

    private String indicatorId;

    private Integer num;

    private String reportYear;


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

    public String getIndicatorId() {
        return indicatorId;
    }

    public void setIndicatorId(String indicatorId) {
        this.indicatorId = indicatorId;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getReportYear() {
        return reportYear;
    }

    public void setReportYear(String reportYear) {
        this.reportYear = reportYear;
    }

    @Override
    public String toString() {
        return "QuestionRecord{" +
        "province=" + province +
        ", city=" + city +
        ", indicatorId=" + indicatorId +
        ", num=" + num +
        ", reportYear=" + reportYear +
        "}";
    }
}
