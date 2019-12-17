package com.myapp.spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class CityDetails {
	
	private String cityName;
	
	@Id
	private String id;

}
