package uz.instagram.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uz.instagram.entity.User;
import uz.instagram.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User submitMetaDataOfUser(User user) {
        return userRepository.save(user);
    }

    public User displayUserMetaData(String userId) {
        return userRepository.findByUserId(userId);
    }

    public List<User> getAllUser(User user) {
        return (List<User>) userRepository.findAll();
    }

}
