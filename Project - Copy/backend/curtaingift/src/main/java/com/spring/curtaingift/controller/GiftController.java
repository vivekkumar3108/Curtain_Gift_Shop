package com.spring.curtaingift.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

import com.spring.curtaingift.model.Gift;
import com.spring.curtaingift.services.GiftServices;


@RestController
@RequestMapping("/")
@CrossOrigin
public class GiftController {
    @Autowired
	private GiftServices service;

    @PostMapping("/admin/addGift")
    public Gift addGift(@RequestBody Gift gift){
        return service.saveGift(gift);
    }

    @GetMapping("/admin/viewGift")
	public List<Gift> findGift(){
		return service.showGift();
	}

    @PutMapping("/admin/updateGift")
	public Gift updateGift(@RequestBody Gift gift){
		return service.updateGift(gift);
	}
	
    @DeleteMapping("/admin/deleteGift")
	public void deleteGift(@RequestParam int id) {
			service.deleteGift(id);	
	}
	
	@GetMapping("/admin/getGift")
	public Optional<Gift> getGiftById(@RequestParam int id) {
		return service.getGiftId(id);
	}

	@PostMapping("/user/selectGift")
    public Optional<Gift> selectGift(@RequestParam int id){
        return service.getGiftId(id);
    }
}
