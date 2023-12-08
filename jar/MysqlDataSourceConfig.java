package com.example.atv.config;




import org.apache.ibatis.session.SqlSessionFactory;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;
import java.util.Arrays;

@Configuration
@MapperScan(basePackages = "com/example/atv/generatetor/mapper",sqlSessionFactoryRef = "db1SqlSessionFactory")
public class MysqlDataSourceConfig {
    static final String MAPPER_LOCATION = "com/example/atv/generatetor/mapper/xml/*.xml";
    @Bean("db1DataSource")
    @ConfigurationProperties(prefix = "spring.datasource.db1")
    public DataSource getDb1DataSource(){
        return DataSourceBuilder.create().build();
    }
    @Bean("db1SqlSessionFactory")
    public SqlSessionFactory db1SqlSessionFactory(@Qualifier("db1DataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources(MAPPER_LOCATION));
        System.out.println(Arrays.toString(new PathMatchingResourcePatternResolver().getResources(MAPPER_LOCATION)));
        return bean.getObject();
    }
    @Bean("db1SqlSessionTemplate")
    public SqlSessionTemplate db1SqlSessionTemplate(@Qualifier("db1SqlSessionFactory") SqlSessionFactory sqlSessionFactory){
        return new SqlSessionTemplate(sqlSessionFactory);
    }
}
