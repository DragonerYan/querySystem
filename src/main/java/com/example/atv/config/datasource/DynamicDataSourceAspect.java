package com.example.atv.config.datasource;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.util.Objects;

/**
 * @ProjectName: querySystem
 * @ClassName: com.example.atv.config.datasource.DynamicDataSourceAspect
 * @Description: 数据源切面通知
 * @Author: ZHANG MIAO
 * @Date: 2023/12/19 16:02
 **/
@Component
@Aspect
public class DynamicDataSourceAspect {
    //断点控制
    @Pointcut("@annotation(com.example.atv.config.datasource.DataSourceSet)")
    public void dynamicDataSource(){}
    //环绕通知。默认master数据源，若切换数据源后，结束方法时清除数据源,设置为默认数据源
    @Around("dynamicDataSource()")
    public Object datasourceAround(ProceedingJoinPoint point) throws Throwable {
        MethodSignature signature = (MethodSignature)point.getSignature();
        Method method = signature.getMethod();
        DataSourceSet ds = method.getAnnotation(DataSourceSet.class);
        if (Objects.nonNull(ds)){
            DataSourceContextHolder.setDataSource(ds.value());
        }
        try {
            return point.proceed();
        } finally {
            DataSourceContextHolder.removeDataSource();
        }
    }

}
