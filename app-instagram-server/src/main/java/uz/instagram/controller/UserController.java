package uz.instagram.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uz.instagram.entity.User;
import uz.instagram.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("")
    private User submitUser(@RequestBody User user) {
        return userService.submitMetaDataOfUser(user);
    }

    @GetMapping("/{user_id}")
    private User getUserDetails(@PathVariable("user_id") String userId) {
        return userService.displayUserMetaData(userId);
    }

    @GetMapping("")
    private List<User> getAll(User user) {
        return userService.getAllUser(user);
    }

}
