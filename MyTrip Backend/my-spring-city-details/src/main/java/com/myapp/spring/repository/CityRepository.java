package com.myapp.spring.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.myapp.spring.model.CityDetails;

@Repository
public interface CityRepository extends MongoRepository<CityDetails, String>{

	
}
