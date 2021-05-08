package uz.instagram.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uz.instagram.entity.Comment;
import uz.instagram.entity.User;
import uz.instagram.service.CommentService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping("")
    private Comment submitComment(@RequestBody Comment comment) {
        return commentService.submitCommentToDB(comment);
    }

    @GetMapping("{post_id}")
    private ArrayList<Comment> getCommentForPost(@PathVariable("post_id") String postId){
        return commentService.getAllCommentForDB(postId);
    }

    @GetMapping("")
    private List<Comment> getAll(Comment comment) {
        return commentService.getAllComment(comment);
    }

}
