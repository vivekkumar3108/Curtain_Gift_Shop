package com.spring.curtaingift.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Theme")

public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String ThemeName;
    private int ThemePrice;
    @Column(length = 5000)
    private String ThemeDesc;

public Theme(){

}

public Theme(int id, String themeName, int themePrice, String themeDesc){
    super();
    this.id=id;
    ThemeName = themeName;
    ThemePrice = themePrice;
    ThemeDesc = themeDesc;
}

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getThemeName() {
        return this.ThemeName;
    }

    public void setThemeName(String ThemeName) {
        this.ThemeName = ThemeName;
    }

    public int getThemePrice() {
        return this.ThemePrice;
    }

    public void setThemePrice(int ThemePrice) {
        this.ThemePrice = ThemePrice;
    }

    public String getThemeDesc() {
        return this.ThemeDesc;
    }

    public void setThemeDesc(String ThemeDesc) {
        this.ThemeDesc = ThemeDesc;
    }

}
