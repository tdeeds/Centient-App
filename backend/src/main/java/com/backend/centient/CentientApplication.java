package com.backend.centient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.sql.Connection;
import java.sql.DriverManager;

@SpringBootApplication
public class CentientApplication {

	public static void main(String[] args) {
		SpringApplication.run(CentientApplication.class, args);
	}
}