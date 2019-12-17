package com.myapp.spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class Flights {
	
	@Id
	private String id;
    private String flightCompany;
    private String departureName;
    private String departureTime;
    private String arrivalName;
    private String arrivalTime;
    private Integer price;
    private String duration;
    private Integer economy;
    private Integer business;

}
