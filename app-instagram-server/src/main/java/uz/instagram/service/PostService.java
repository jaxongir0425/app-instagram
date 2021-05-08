package uz.instagram.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uz.instagram.entity.Post;
import uz.instagram.repository.PostRepository;

import java.util.ArrayList;
import java.util.Collections;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    @Autowired
    UserService userService;

    public Post submitPostToDatabase(Post post) {
        return postRepository.save(post);
    }

    public ArrayList<Post> retrievePostFormDB() {
        ArrayList<Post> postList = postRepository.findAll();

        for (int i = 0; i < postList.size(); i++) {
            Post postItem = postList.get(i);
            postItem.setUsername(userService.displayUserMetaData(postItem.getUserId()).getUsername());
        }
        Collections.sort(postList, (a, b) -> b.getId() - a.getId());
        return postList;
    }

}
