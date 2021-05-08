package uz.instagram.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uz.instagram.entity.Status;
import uz.instagram.repository.StatusRepository;

import java.util.ArrayList;

@Service
public class StatusService {

    @Autowired
    StatusRepository statusRepository;

    @Autowired
    UserService userService;

    public Status submitDataIntoDB(Status status) {
        return statusRepository.save(status);
    }

    public ArrayList<Status> retrieveStatus() {
        ArrayList<Status> statusList = statusRepository.findAll();

        for (int i = 0; i < statusList.size(); i++) {
            Status statusItem = statusList.get(i);
            statusItem.setUsername(userService.displayUserMetaData(statusItem.getUserId()).getUsername());
        }
        return statusList;
    }

}
