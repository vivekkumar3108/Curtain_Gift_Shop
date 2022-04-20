package com.spring.curtaingift.model;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="order_details")
public class Order {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String ordername;
    private String orderdesc;
    private String giftname;
    private String themename;
    private Date orderdate;
    private int orderprice;
    private String orderaddress;
    private String orderphone;
    private String orderemail;
    private String Username;



    public Order(){

    }

    public Order(int id,String ordername,String themename, String Username, String giftname, String orderdesc,Date orderdate, int orderprice, String orderaddress, String orderphone,String orderemail ){

        this.id = id;
       this.giftname = giftname;
        this.themename = themename;
        this.ordername = ordername;
        this.orderdesc = orderdesc;
        this.orderdate = orderdate;
        this.orderprice = orderprice;
        this.orderaddress = orderaddress;
        this.orderphone = orderphone;
        this.orderemail = orderemail;
        this.Username = Username;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    
    public String getOrdername() {
        return this.ordername;
    }

    public void setOrdername(String ordername) {
        this.ordername = ordername;
    }

    public String getOrderdesc() {
        return this.orderdesc;
    }

    public void setOrderdesc(String orderdesc) {
        this.orderdesc = orderdesc;
    }

    public String getGiftname() {
        return this.giftname;
    }

    public void setGiftname(String giftname) {
        this.giftname = giftname;
    }

    public String getThemename() {
        return this.themename;
    }

    public void setThemename(String themename) {
        this.themename = themename;
    }

    public Date getOrderdate() {
        return this.orderdate;
    }

    public void setOrderdate(Date orderdate) {
        this.orderdate = orderdate;
    }

    public int getOrderprice() {
        return this.orderprice;
    }

    public void setOrderprice(int orderprice) {
        this.orderprice = orderprice;
    }

    public String getOrderaddress() {
        return this.orderaddress;
    }

    public void setOrderaddress(String orderaddress) {
        this.orderaddress = orderaddress;
    }

    public String getOrderphone() {
        return this.orderphone;
    }

    public void setOrderphone(String orderphone) {
        this.orderphone = orderphone;
    }

    public String getOrderemail() {
        return this.orderemail;
    }

    public void setOrderemail(String orderemail) {
        this.orderemail = orderemail;
    }

    public String getUsername() {
        return this.Username;
    }

    public void setUsername(String Username) {
        this.Username = Username;
    }

}
