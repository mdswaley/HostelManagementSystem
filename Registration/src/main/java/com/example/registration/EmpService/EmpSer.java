package com.example.registration.EmpService;


import com.example.registration.Dto.AddStuDto;
import com.example.registration.Dto.EmpDto;
import com.example.registration.Dto.LoginDto;
import com.example.registration.LoginMesage;

public interface EmpSer {
    String addEmployee(EmpDto empDto);
    LoginMesage loginEmployee(LoginDto loginDTO);


}