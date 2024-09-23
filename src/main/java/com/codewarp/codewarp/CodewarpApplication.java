package com.codewarp.codewarp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@SpringBootApplication
@RestController
public class CodewarpApplication {
	@PostMapping("helloworld")
	public String postMethodName(@RequestBody String entity) {
		//TODO: process POST request
		
		return "Helloworld!";
	}
	
	public static void main(String[] args) {
		SpringApplication.run(CodewarpApplication.class, args);
	}

}
