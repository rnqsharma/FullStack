package com.myapp.spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data

public class Airline {
	private String airLineName;
	
	@Id
	private String id;
	private String logo;
    
}
