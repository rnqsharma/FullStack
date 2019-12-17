package com.myapp.spring.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myapp.spring.model.Profile;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, String>{

	
	//List<Profile> findByCities (@Param("city")String city);
	
}
