package com.example.atv.config.datasource;

import org.springframework.stereotype.Component;

/**
 * @ProjectName: querySystem
 * @ClassName: com.example.atv.config.datasource.DataSourceContextHolder
 * @Description: 动态数据源手动调用及控制方法
 * @Author: ZHANG MIAO
 * @Date: 2023/12/19 15:51
 **/
@Component


public class DataSourceContextHolder {

    //获取全局线程数据
    private static final ThreadLocal<String> DATASOURCE_HOLDER = new ThreadLocal<>();

    /**
     * 手动设置数据源
     * @param dataSourceName 数据源名称
     */
    public static void setDataSource(String dataSourceName){
        DATASOURCE_HOLDER.set(dataSourceName);
    }

    /**
     * 获取当前线程的数据源
     * @return 数据源名称
     */
    public static String getDataSource(){
        return DATASOURCE_HOLDER.get();
    }

    /**
     * 删除当前数据源
     */
    public static void removeDataSource(){
        DATASOURCE_HOLDER.remove();
    }

}
