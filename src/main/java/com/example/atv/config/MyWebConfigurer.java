package com.example.atv.config;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class MyWebConfigurer implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry){
        //设置允许跨域的路径
        registry.addMapping ("/**")
                //设置允许跨域请求的域名
                .allowedOriginPatterns ("*")
                //是否允许证书
                .allowCredentials (true)
                //设置允许的方法
                .allowedMethods ("GET","POST")
                //设置允许的header属性
                .allowedHeaders ("*")
                //允许跨域时间
                .maxAge (3600);
    }


}

