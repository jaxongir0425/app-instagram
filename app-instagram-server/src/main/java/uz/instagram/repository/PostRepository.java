package uz.instagram.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import uz.instagram.entity.Post;

import java.util.ArrayList;

@Repository
public interface PostRepository extends CrudRepository<Post, Integer> {

    Post save(Post post);

    ArrayList<Post> findAll();

}
