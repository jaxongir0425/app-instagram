package uz.instagram.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import uz.instagram.entity.Status;

import java.util.ArrayList;

@Repository
public interface StatusRepository extends CrudRepository<Status, Integer> {

    Status save(Status save);

    ArrayList<Status> findAll();

}
