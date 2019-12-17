package com.myapp.spring.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Document
@Data
public class Profile {
	
	@Id
	private String id ;
	private String fullName;
	private String password; ;
	private String gender;
	private String dob;
	private String address;
	private String city;
	private String state;
	private String country;
	private Number pincode;
	private Number mobile;;
	private String rights;
	
	private List<FlightsBooked> bookedFlights = new ArrayList<FlightsBooked>();
	
}