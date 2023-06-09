package com.example.atv;

import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Slf4j
@EnableSwagger2
@SpringBootApplication
@MapperScan({"com.example.atv.dao.mapper","com.example.atv.generatetor.mapper"})
public class SmokeManagementApplication {

	public static void main(String[] args) {
		try{
			SpringApplication.run(SmokeManagementApplication.class, args);
		}catch (Exception e){
			log.debug(e.getMessage());
		}

	}

}
