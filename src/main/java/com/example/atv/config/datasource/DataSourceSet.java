package com.example.atv.config.datasource;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @ProjectName: querySystem
 * @ClassName: com.example.atv.config.datasource.DataSourceSet
 * @Description: 数据源切面配置
 * @Author: ZHANG MIAO
 * @Date: 2023/12/19 16:00
 **/
@Target({ElementType.TYPE,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface DataSourceSet {
    // 设置默认值
    String value() default "master";
}
