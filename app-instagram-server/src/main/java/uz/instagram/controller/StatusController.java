package uz.instagram.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uz.instagram.entity.Status;
import uz.instagram.service.StatusService;

import java.util.ArrayList;

@RestController
@RequestMapping("/status")
@CrossOrigin(origins = "http://localhost:3000")
public class StatusController {

    @Autowired
    StatusService statusService;

    @PostMapping("")
    private Status submitStatus(@RequestBody Status status) {
        return statusService.submitDataIntoDB(status);
    }

    @GetMapping("")
    private ArrayList<Status> getAllStatus() {
        return statusService.retrieveStatus();
    }

}
