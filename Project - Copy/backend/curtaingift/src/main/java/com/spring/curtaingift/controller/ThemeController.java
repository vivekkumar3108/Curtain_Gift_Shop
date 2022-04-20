package com.spring.curtaingift.controller;
import java.util.*;

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

import com.spring.curtaingift.model.Theme;
import com.spring.curtaingift.services.ThemeServices;


@RestController
@RequestMapping("/")
@CrossOrigin
public class ThemeController {
    
    @Autowired
    private ThemeServices tservice;

    @PostMapping("/admin/addTheme")
    public Theme addTheme(@RequestBody Theme theme){
        return tservice.saveTheme(theme);
    }

    @GetMapping("admin/viewTheme")
    public List<Theme> findTheme(){
        return tservice.showTheme();
    }


    @PutMapping("/admin/updateTheme")
    public Theme updateTheme(@RequestBody Theme theme){
        return tservice.updateTheme(theme);
    }
    
    @DeleteMapping("/admin/deleteTheme")
    public void deleteTheme(@RequestParam int id){
        tservice.deleteTheme(id);
    }

    @PostMapping("/user/selectTheme")
    public Optional<Theme> getThemeByID(@RequestParam int id){
        return tservice.getThemeId(id);
    }

    @GetMapping("user/getAllTheme")
    public List<Theme> getAllTheme(){
        return tservice.showTheme();
    }

    
}
