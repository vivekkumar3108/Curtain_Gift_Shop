package com.spring.curtaingift.services;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.curtaingift.model.Gift;
import com.spring.curtaingift.repository.GiftRepository;

@Service
public class GiftServices {
    @Autowired
	private GiftRepository repository;

    	
	public Gift saveGift(Gift gift) {
		return repository.save(gift);
	}
	
	public List<Gift> showGift() {
		return repository.findAll();
	}
	
	public void deleteGift(int id) {
		repository.deleteById(id);
	}
	
	public Gift updateGift(Gift gift) {
		Gift existingGift = repository.findById(gift.getId()).orElse(null);
		existingGift.setGiftName(gift.getGiftName());
        existingGift.setGiftPrice(gift.getGiftPrice());
		existingGift.setGiftDesc(gift.getGiftDesc());
		existingGift.setImageURL(gift.getImageURL());
		return repository.save(existingGift);
	}
	
	public Optional<Gift> getGiftId(int id) {
		return repository.findById(id);
	}
}
