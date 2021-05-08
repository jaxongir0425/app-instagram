package uz.instagram.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uz.instagram.entity.Comment;
import uz.instagram.entity.Post;
import uz.instagram.repository.CommentRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    UserService userService;

    public Comment submitCommentToDB(Comment comment) {
        return commentRepository.save(comment);
    }

    public List<Comment> getAllComment(Comment comment) {
        return (List<Comment>) commentRepository.findAll();
    }

    public ArrayList<Comment> getAllCommentForDB(String postId) {
        ArrayList<Comment> commentList = commentRepository.findAllByPostId(postId);

        for (int i = 0; i < commentList.size(); i++) {
            Comment commentItem = commentList.get(i);
            commentItem.setUsername(userService.displayUserMetaData(commentItem.getUserId()).getUsername());
        }
        return commentList;
    }

}
