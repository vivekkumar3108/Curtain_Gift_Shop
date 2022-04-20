package com.spring.curtaingift.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Gift")

public class Gift {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String GiftName;
    private int GiftPrice;
    private String ImageURL;
    private int GiftQuantity;
    @Column(length = 5000)
    private String GiftDesc;

   

    public Gift(){

    }

    public Gift(int id, String giftName, int giftPrice, String imageURL, int giftQuantity, String giftDesc){
        super();
        this.id = id;
        GiftName = giftName;
        GiftPrice = giftPrice;
        ImageURL = imageURL;
        GiftQuantity = giftQuantity;
        GiftDesc = giftDesc;
    }

 public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGiftName() {
        return this.GiftName;
    }

    public void setGiftName(String GiftName) {
        this.GiftName = GiftName;
    }

    public int getGiftPrice() {
        return this.GiftPrice;
    }

    public void setGiftPrice(int GiftPrice) {
        this.GiftPrice = GiftPrice;
    }

    public String getImageURL() {
        return this.ImageURL;
    }

    public void setImageURL(String ImageURL) {
        this.ImageURL = ImageURL;
    }

    public int getGiftQuantity() {
        return this.GiftQuantity;
    }

    public void setGiftQuantity(int GiftQuantity) {
        this.GiftQuantity = GiftQuantity;
    }

    public String getGiftDesc() {
        return this.GiftDesc;
    }

    public void setGiftDesc(String GiftDesc) {
        this.GiftDesc = GiftDesc;
    }
}
