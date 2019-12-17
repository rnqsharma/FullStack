package com.myapp.spring.api;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.spring.model.Profile;
import com.myapp.spring.repository.ProfileRepository;

@RestController
//@CrossOrigin("https://localhost:4200")
public class ProfileAPI {

	@Autowired
	private ProfileRepository repository;
	
	@PostMapping("/signup")
	public ResponseEntity<Profile> addNewProfile(@RequestBody Profile profile) {
		repository.save(profile);
		return new ResponseEntity<Profile>(profile, HttpStatus.CREATED);
	}

	@GetMapping("/viewprofile/{id}")
	public Optional<Profile> findById(@PathVariable("id")String id){
	return repository.findById(id);
	}
	
	@PutMapping("/editprofile/{id}")
	public ResponseEntity<Profile> updateProfile(
	@PathVariable("id")String id,@RequestBody Profile profile)
	{
	Profile existingProfile = repository.findById(id).get();
	BeanUtils.copyProperties(profile, existingProfile);
	existingProfile = repository.save(existingProfile);
	return new ResponseEntity<Profile>(existingProfile, HttpStatus.ACCEPTED);
}
	
}
