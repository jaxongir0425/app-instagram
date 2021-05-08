package uz.instagram.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import uz.instagram.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    User save(User user);

    User findByUserId(String userId);

}
