package com.codewarp.codewarp.History;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.codewarp.codewarp.Users.Users;
@CrossOrigin(origins="*")
@RestController
public class HistoryController {
    @Autowired
    public HistoryRepository crud;
    @PostMapping("addhistory")
    @ResponseBody
    public History addhistory(@RequestBody History b)
    {
        crud.save(b);
        return b;
    }
    @PostMapping("gethistory")
    public List<History> gethistory(@RequestBody Users b)
    {
        Iterable<History> a = crud.findAll();
        
        List<History> c = new ArrayList<>();
        for(History i:a)
        {
            if(i.username != null && i.username.equals(b.username))
            c.add(i);
        }
        return c;
    }

}
