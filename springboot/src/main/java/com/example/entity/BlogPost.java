package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class BlogPost {
    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String category;
    private String date;
    private String text;

    

    // Getters
    public Long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public String getCategory() {
        return category;
    }
    public String getDate() {
        return date;
    }
    public String getText() {
        return text;
    }


    // Setters
    public void setId(Long id) {
        this.id = id;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public void setText(String text) {
        this.text = text;
    }
    
}