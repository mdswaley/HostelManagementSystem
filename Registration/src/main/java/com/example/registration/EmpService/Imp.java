package com.example.registration.EmpService;
import com.example.registration.Dto.AddStuDto;
import com.example.registration.Dto.EmpDto;
import com.example.registration.Dto.LoginDto;
import com.example.registration.EmpRepo;
import com.example.registration.Entity.AddStudent;
import com.example.registration.Entity.Emp;
import com.example.registration.LoginMesage;
import com.example.registration.StuRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class Imp implements EmpSer {
    @Autowired
    private EmpRepo employeeRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addEmployee(EmpDto employeeDTO) {

        Emp employee = new Emp(
                employeeDTO.getUserId(),
                employeeDTO.getUserName(),
                employeeDTO.getUserSta(),
                employeeDTO.getWarId(),
                employeeDTO.getUserEmail(),


        this.passwordEncoder.encode(employeeDTO.getUserPass())


        );

        employeeRepo.save(employee);
        return employee.getUserName();
    }



    EmpDto employeeDTO;
    AddStuDto addStuDto;

    @Override
    public LoginMesage loginEmployee(LoginDto loginDTO) {
        String msg = "";
        Emp employee1 = employeeRepo.findByUserEmail(loginDTO.getUserEmail());
        if (employee1 != null) {
            String password = loginDTO.getUserPass();
            String encodedPassword = employee1.getUserPass();
            String warId = loginDTO.getWarId();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Emp> employee = employeeRepo.findOneByUserEmailAndUserPassAndWarId(loginDTO.getUserEmail(), encodedPassword,loginDTO.getWarId());
                if (employee.isPresent()) {
                    return new LoginMesage("Login Success", true);
                } else {
                    return new LoginMesage("Login Failed", false);
                }
            } else {
                return new LoginMesage("password Not Match", false);
            }
        } else {
            return new LoginMesage("Email not exits", false);
        }
    }


}