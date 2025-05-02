package com.example.login_backend.controllers;

import com.example.login_backend.models.User;
import com.example.login_backend.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getUsers();
    }



    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
}