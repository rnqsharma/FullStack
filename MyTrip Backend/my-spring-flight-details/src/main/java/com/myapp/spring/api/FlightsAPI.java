package com.myapp.spring.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.spring.model.Flights;
import com.myapp.spring.repository.FlightRepository;


@RestController
//@CrossOrigin("https://localhost:4200")
public class FlightsAPI {

	@Autowired
	private FlightRepository repository;
	
	@GetMapping("/searchbyid/{id}")
	public Optional<Flights> findById(@PathVariable("id")String id){
	return repository.findById(id);
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<Flights>> findAll(){
	return new ResponseEntity<List<Flights>>(repository.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("/addflights")
	public ResponseEntity<Flights> addNewFlight(@RequestBody Flights flight) {
		repository.save(flight);
		return new ResponseEntity<Flights>(flight, HttpStatus.CREATED);
	}
	
	@PutMapping("/updateFlights/{id}")
	public ResponseEntity<Flights> updateExistingFlightDetails(
	@PathVariable("id")String id,@RequestBody Flights flight)
	{
	Flights existingFlights = repository.findById(id).get();
	BeanUtils.copyProperties(flight, existingFlights);
	existingFlights = repository.save(existingFlights);
	return new ResponseEntity<Flights>(existingFlights, HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/deleteFlights/{id}")
	public ResponseEntity<Flights> delete(@PathVariable("id") String id)
	{
	repository.deleteById(id);
	Flights flights = new Flights();
	flights.setId(id);
	return new ResponseEntity<Flights>(flights, HttpStatus.GONE);
	}

}
