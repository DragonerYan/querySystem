package com.example.atv.config.datasource;

import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

import javax.sql.DataSource;
import java.util.Map;

/**
 * @ProjectName: querySystem
 * @ClassName: com.example.atv.config.datasource.DynamicDataSource
 * @Description:
 * @Author: ZHANG MIAO
 * @Date: 2023/12/19 17:54
 **/
public class DynamicDataSource extends AbstractRoutingDataSource {

    public DynamicDataSource(DataSource defaultDataSource, Map<Object, Object> targetDataSources){
        super.setDefaultTargetDataSource(defaultDataSource);
        super.setTargetDataSources(targetDataSources);
    }

    @Override
    protected Object determineCurrentLookupKey() {
        return DataSourceContextHolder.getDataSource();
    }

}
