package com.sample.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
	@Autowired
	ReviewRepo reviewRepo;
	
	public boolean addReview(Reviews review) {
		if(reviewRepo.save(review)!=null) {
			return true;
		}
		else {
			return false;
		} 
	}
	
	public List<Reviews> getReviewsByBook(String bookName){
		return reviewRepo.getReviewsByBook(bookName);
	}
	
}
