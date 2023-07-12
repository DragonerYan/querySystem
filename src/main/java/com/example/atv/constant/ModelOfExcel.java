package com.example.atv.constant;

import com.alibaba.excel.annotation.ExcelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ModelOfExcel {

    @ExcelProperty("姓名")
    private String name;

    @ExcelProperty("年龄")
    private int age;

    @ExcelProperty("性别")
    private String sex;

}
