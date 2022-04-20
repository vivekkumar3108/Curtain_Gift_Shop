package com.spring.curtaingift.model;

import javax.persistence.Id;
import javax.persistence.Table;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "Cart")
public class Cart {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String Ordername;
    private String Orderdesc;
    private String Giftname;
    private String Themename;
    private Date Orderdate;
    private int Orderprice;
    private String Orderaddress;
    private String Orderphone;
    private String Orderemail;
    private String Username;

  
    public Cart(){

    }

    public Cart(int id,String Ordername,String Themename, String Username, String Giftname, String Orderdesc,Date Orderdate, int Orderprice, String Orderaddress, String Orderphone,String Orderemail ){
        this.id = id;
        this.Giftname = Giftname;
        this.Themename = Themename;
        this.Ordername = Ordername;
        this.Orderdesc = Orderdesc;
        this.Orderdate = Orderdate;
        this.Orderprice = Orderprice;
        this.Orderaddress = Orderaddress;
        this.Orderphone = Orderphone;
        this.Orderemail = Orderemail;
        this.Username = Username;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOrdername() {
        return this.Ordername;
    }

    public void setOrdername(String Ordername) {
        this.Ordername = Ordername;
    }

    public String getOrderdesc() {
        return this.Orderdesc;
    }

    public void setOrderdesc(String Orderdesc) {
        this.Orderdesc = Orderdesc;
    }

    public String getGiftname() {
        return this.Giftname;
    }

    public void setGiftname(String Giftname) {
        this.Giftname = Giftname;
    }

    public String getThemename() {
        return this.Themename;
    }

    public void setThemename(String Themename) {
        this.Themename = Themename;
    }

    public Date getOrderdate() {
        return this.Orderdate;
    }

    public void setOrderdate(Date date) {
        this.Orderdate = date;
    }

    public int getOrderprice() {
        return this.Orderprice;
    }

    public void setOrderprice(int Orderprice) {
        this.Orderprice = Orderprice;
    }

    public String getOrderaddress() {
        return this.Orderaddress;
    }

    public void setOrderaddress(String Orderaddress) {
        this.Orderaddress = Orderaddress;
    }

    public String getOrderphone() {
        return this.Orderphone;
    }

    public void setOrderphone(String Orderphone) {
        this.Orderphone = Orderphone;
    }

    public String getOrderemail() {
        return this.Orderemail;
    }

    public void setOrderemail(String Orderemail) {
        this.Orderemail = Orderemail;
    }

    public String getUsername() {
        return this.Username;
    }

    public void setUsername(String Username) {
        this.Username = Username;
    }


}