package uz.instagram.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import uz.instagram.entity.Comment;

import java.util.ArrayList;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {

    Comment save(Comment comment);

    ArrayList<Comment> findAllByPostId(String postId);

}
