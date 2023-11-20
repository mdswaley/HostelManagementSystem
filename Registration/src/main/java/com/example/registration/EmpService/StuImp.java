package com.example.registration.EmpService;

import com.example.registration.Dto.AddStuDto;
import com.example.registration.Entity.AddStudent;
import com.example.registration.Entity.TakingAttendance;
import com.example.registration.ResourceNotFoundExcp;
import com.example.registration.StuAtt;
import com.example.registration.StuRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StuImp implements StuSer{

    @Autowired
    private StuRepo stuRepo;
    @Autowired
    private StuAtt stuAtt;
    @Override
    public String addStudent1(AddStuDto addStuDto) {

            AddStudent addStudent = new AddStudent(
                    addStuDto.getStuId(),
                    addStuDto.getUserName(),
                    addStuDto.getStuReg(),
                    addStuDto.getStuStatus(),
                    addStuDto.getStuContact(),
                    addStuDto.getStuAddress(),
                    addStuDto.getStuCity(),
                    addStuDto.getStuFatherCon(),
                    addStuDto.getStuHostNo(),
                    addStuDto.getStuRoomNo(),
                    addStuDto.getStuCatg()
            );
            stuRepo.save(addStudent);
            return addStuDto.getStuReg();

        }

    @Override
    public List<AddStudent> getAllStudent() {
        return stuRepo.findAll();
    }

    @Override
    public AddStudent getStudentById(Long stuId) {
        Optional<AddStudent> emp =stuRepo.findById(stuId);
        if (emp.isPresent()){
            return emp.get();
        }else{
            throw new ResourceNotFoundExcp("AddStudent","ID",stuId);
        }
    }

    @Override
    public List<TakingAttendance> getAllAtt() {
        return stuAtt.findAll();
    }

    @Override
    public void addSelectedStudents(List<Long> selectedIds) {
        List<AddStudent> selectedStudents = getAllStudent().stream()
                .filter(student -> selectedIds.contains(student.getStuId()))
                .collect(Collectors.toList());

        // Convert AddStudent to NewStudent and save in the new student table
        List<TakingAttendance> takingAttendances = selectedStudents.stream()
                .map(this::convertToAddStudent)
                .collect(Collectors.toList());

        stuAtt.saveAll(takingAttendances);
    }





    @Override
    public void deleteMap(Long stuId) {
        stuRepo.deleteById(stuId);
    }

    @Override
    public void deleteSelectedStudents(List<Long> selectedIds) {
        for (Long stuId : selectedIds) {
            deleteMap(stuId);
        }
        stuRepo.deleteByStuIdIn(selectedIds);
    }




    @Override
    public AddStudent saveStudent(AddStudent addStudent) {
        return stuRepo.save(addStudent);
    }

    // StuSerImpl.java
    private TakingAttendance convertToAddStudent(AddStudent addStudent) {
        TakingAttendance takingAttendance = new TakingAttendance();
        takingAttendance.setName(addStudent.getUserName());
        takingAttendance.setRegistrationNumber(addStudent.getStuReg());
        takingAttendance.setAttendanceDate(LocalDate.now()); // Set the date to the current date
        // Set other fields as needed
        return takingAttendance;
    }



}
