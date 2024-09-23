package com.codewarp.codewarp.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="*")
@RestController
public class UsersController {
    @Autowired
    public UsersRepository crud;
    @PostMapping("signup")
    @ResponseBody
    public Users signup(@RequestBody Users user)
    {
        int c=0;
        Iterable<Users> a = crud.findAll();
        for(Users i:a)
        {
            if(i.username.equals(user.username))
            {
                c+=1;
                break;
            }
        }
        if(c==0)
        {
            crud.save(user);
            return user;
        }
        else
        {
            return new Users();
        }
    }
    @PostMapping("login")
    @ResponseBody
    public Users login(@RequestBody Users user)
    {
        int c=0;
        Iterable<Users> a = crud.findAll();
        for(Users i:a)
        {
            if(i.username.equals(user.username) && i.password.equals(user.password))
            {
                c+=1;
                break;
            }
        }
        if(c==0)
        return new Users();
        else
        return user;
    }
}
