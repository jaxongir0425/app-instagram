package uz.instagram.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uz.instagram.entity.Post;
import uz.instagram.service.PostService;

import java.util.ArrayList;

@RestController
@RequestMapping("/post")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("")
    private Post submitUserPost(@RequestBody Post post) {
        return postService.submitPostToDatabase(post);
    }

    @GetMapping("")
    private ArrayList<Post> getAllPost() {
        return postService.retrievePostFormDB();
    }

}
