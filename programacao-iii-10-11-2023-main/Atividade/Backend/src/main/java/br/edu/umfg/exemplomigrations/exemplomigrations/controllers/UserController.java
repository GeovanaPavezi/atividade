package br.edu.umfg.exemplomigrations.exemplomigrations.controllers;

import br.edu.umfg.exemplomigrations.exemplomigrations.model.User;
import br.edu.umfg.exemplomigrations.exemplomigrations.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository UserRepository;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> postUser (@RequestBody User user){
        UserRepository.save(user);

        return ResponseEntity.ok(user);
    }

    @GetMapping
    public ResponseEntity<Iterable<User>> getClient(){
        return ResponseEntity.ok(UserRepository.findAll());
    }
}
