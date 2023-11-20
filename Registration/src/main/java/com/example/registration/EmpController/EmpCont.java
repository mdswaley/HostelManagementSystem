package com.example.registration.EmpController;
import com.example.registration.Dto.EmpDto;
import com.example.registration.Dto.LoginDto;
import com.example.registration.EmpService.EmpSer;
import com.example.registration.LoginMesage;
import com.example.registration.LoginMesageAdm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/userReg")
public class EmpCont {

    @Autowired
    private EmpSer employeeService;

    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody EmpDto employeeDTO)
    {
        String id = employeeService.addEmployee(employeeDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDto loginDTO)
    {
        LoginMesage loginMesage = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginMesage);
    }


}
