package com.myapp.spring.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.myapp.spring.model.Airline;

@Repository
public interface AirlinesRepository extends MongoRepository<Airline, String>{
	

}
