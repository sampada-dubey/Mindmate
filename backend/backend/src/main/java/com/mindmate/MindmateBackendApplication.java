package com.mindmate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.mindmate")
public class MindmateBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(MindmateBackendApplication.class, args);
	}

}
