package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    // No-arg constructor
    public User() {
    }

    // All-args constructor
    public User(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Custom getter for id
    public Long getId() {
        return id;
    }

    // Custom setter for id
    public void setId(Long id) {
        this.id = id;
    }

    // Custom getter for name
    public String getName() {
        return name != null ? name.toUpperCase() : null;  // Example: Uppercasing name
    }

    // Custom setter for name
    public void setName(String name) {
        this.name = name != null ? name.trim() : null;  // Example: Trimming whitespace
    }

    // Custom getter for email
    public String getEmail() {
        return email != null ? email.toLowerCase() : null;  // Example: Lowercasing email
    }

    // Custom setter for email
    public void setEmail(String email) {
        this.email = email != null ? email.trim() : null;  // Example: Trimming whitespace
    }
}
