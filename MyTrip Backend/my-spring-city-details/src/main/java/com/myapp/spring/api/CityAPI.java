package com.myapp.spring.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.spring.model.CityDetails;
import com.myapp.spring.repository.CityRepository;

@RestController
//@CrossOrigin("https://localhost:4200")
public class CityAPI {

	@Autowired
	private CityRepository repository;
	
	@GetMapping("/cities")
	public ResponseEntity<List<CityDetails>> findAll(){
	return new ResponseEntity<List<CityDetails>>(repository.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("/citydetails")
	public ResponseEntity<CityDetails> addNewCity(@RequestBody CityDetails cityDetails) {
		repository.save(cityDetails);
		return new ResponseEntity<CityDetails>(cityDetails, HttpStatus.CREATED);
	}

	@DeleteMapping("/deleteCities/{id}")
	public ResponseEntity<CityDetails> delete(@PathVariable("id") String id)
	{
	repository.deleteById(id);
	CityDetails cities = new CityDetails();
	cities.setId(id);
	return new ResponseEntity<CityDetails>(cities, HttpStatus.GONE);
	}

}
