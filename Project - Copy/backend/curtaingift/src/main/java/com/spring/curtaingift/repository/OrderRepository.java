package com.spring.curtaingift.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import com.spring.curtaingift.model.Order;

public interface OrderRepository extends JpaRepository <Order, Integer>{
    @Query(
        value = "SELECT * FROM order_details WHERE username =?1", 
        nativeQuery = true)
          public List<Order> finduserOrder(String username);
}