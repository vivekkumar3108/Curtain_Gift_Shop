package com.spring.curtaingift.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.curtaingift.model.Gift;

public interface GiftRepository extends JpaRepository <Gift, Integer>{
}
