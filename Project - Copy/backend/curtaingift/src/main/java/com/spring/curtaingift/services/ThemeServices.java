package com.spring.curtaingift.services;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.curtaingift.model.Theme;
import com.spring.curtaingift.repository.ThemeRepository;
@Service
public class ThemeServices {
    @Autowired
    private ThemeRepository trepository;

    public Theme saveTheme(Theme theme){
        return trepository.save(theme);
    }

    public List<Theme> showTheme(){
        return trepository.findAll();
    }

    public void deleteTheme(int id){
        trepository.deleteById(id);
    }

    public Theme updateTheme(Theme theme){
        Theme existingTheme = trepository.findById(theme.getId()).orElse(null);
        existingTheme.setThemeName(theme.getThemeName());
        existingTheme.setThemePrice(theme.getThemePrice());
        existingTheme.setThemeDesc(theme.getThemeDesc());
        return trepository.save(existingTheme);
    }

    public Optional<Theme> getThemeId(int id){
        return trepository.findById(id);
    }
}
