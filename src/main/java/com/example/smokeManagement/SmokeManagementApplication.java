package com.example.smokeManagement;

import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.smokeManagement.audit.dao.mapper")
@Slf4j
public class SmokeManagementApplication {

	public static void main(String[] args) {
		try{
			SpringApplication.run(SmokeManagementApplication.class, args);
		}catch (Exception e){
			log.debug(e.getMessage());
		}

	}

}
