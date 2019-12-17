package com.myapp.spring.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.spring.model.Airline;
import com.myapp.spring.repository.AirlinesRepository;

@RestController
//@CrossOrigin("https://localhost:4200")
public class AirlineAPI {

	@Autowired
	private AirlinesRepository repository;
	
	@GetMapping("/searchairlinebyid/{id}")
	public Optional<Airline> findById(@PathVariable("id")String id){
	return repository.findById(id);
	}
	
	@GetMapping("/searchairline")
	public ResponseEntity<List<Airline>> findAll(){
	return new ResponseEntity<List<Airline>>(repository.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("/addairline")
	public ResponseEntity<Airline> addNewAirline(@RequestBody Airline airline) {
		repository.save(airline);
		return new ResponseEntity<Airline>(airline, HttpStatus.CREATED);
	}
	
	@PutMapping("/updateAirlines/{id}")
	public ResponseEntity<Airline> updateExistingAirlineDetails(
	@PathVariable("id")String id,@RequestBody Airline airline)
	{
	Airline existingAirlines = repository.findById(id).get();
	BeanUtils.copyProperties(airline, existingAirlines);
	existingAirlines = repository.save(existingAirlines);
	return new ResponseEntity<Airline>(existingAirlines, HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/deleteAirlines/{id}")
	public ResponseEntity<Airline> delete(@PathVariable("id") String id)
	{
	repository.deleteById(id);
	Airline airlines = new Airline();
	airlines.setId(id);
	return new ResponseEntity<Airline>(airlines, HttpStatus.GONE);
	}

}
