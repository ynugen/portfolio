package com.example.portfolio;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
public class Controller {

    @GetMapping("/api/test/{resourceId}")
    public String getString(@PathVariable String resourceId){
        return "Here is your resource: " + resourceId;
    }
    
}
