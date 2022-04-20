package com.spring.curtaingift.repository;
import java.util.List;

import com.spring.curtaingift.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    @Query(value = "SELECT * FROM cart WHERE username =?1", nativeQuery = true)
    public List<Cart> getmycart(String username);
    @Query("SELECT COUNT(*) FROM Cart WHERE username=?1")
    long cartcount(String username);
    @Modifying
    @Transactional
    @Query("DELETE FROM Cart WHERE username=?1")
    int deleteCart(String username);
    List<Cart> findAll();
}