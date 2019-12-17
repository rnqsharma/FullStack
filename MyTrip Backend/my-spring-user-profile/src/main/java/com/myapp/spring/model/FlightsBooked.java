package com.myapp.spring.model;

import lombok.Data;

@Data
public class FlightsBooked {
	
	private String flightId;
    private String flightCompany;
    private String departureName;
    private String departureTime;
    private String arrivalName;
    private String arrivalTime;
    private Integer price;
    private String duration;

}
