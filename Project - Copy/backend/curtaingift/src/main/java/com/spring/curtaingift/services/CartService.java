package com.spring.curtaingift.services;

import java.util.List;

import com.spring.curtaingift.model.Cart;
import com.spring.curtaingift.repository.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class CartService {
    @Autowired
    private CartRepository repository;
    public Cart saveCart(Cart cart) {
		return repository.save(cart);
	}
    public List<Cart> showCart() {
		return repository.findAll();
	}

    public long countCart(String username){
        return repository.cartcount(username);
    }
	public void deleteCart(int id) {
		repository.deleteById(id);
	}
    public List<Cart> getmycart(String username){
        return repository.getmycart(username);
    }
    public Cart updateCart(Cart cart){
        Cart existingCart = repository.findById(cart.getId()).orElse(null);
        existingCart.setOrdername(cart.getOrdername());
        existingCart.setOrderdesc(cart.getOrderdesc());
        existingCart.setOrderdate(cart.getOrderdate());
        existingCart.setOrderphone(cart.getOrderphone());
        existingCart.setOrderaddress(cart.getOrderaddress());
        existingCart.setOrderemail(cart.getOrderemail());
        existingCart.setThemename(cart.getThemename());

        return repository.save(existingCart);
    }
}


