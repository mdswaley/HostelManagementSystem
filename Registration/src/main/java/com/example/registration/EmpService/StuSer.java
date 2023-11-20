package com.example.registration.EmpService;

import com.example.registration.Dto.AddStuDto;
import com.example.registration.Entity.AddStudent;
import com.example.registration.Entity.TakingAttendance;

import java.time.LocalDate;
import java.util.List;

public interface StuSer {
    String addStudent1(AddStuDto addStuDto);
    List<AddStudent> getAllStudent();

    AddStudent getStudentById(Long stuId);

    List<TakingAttendance> getAllAtt();

    void addSelectedStudents(List<Long> selectedIds);
    void deleteMap(Long stuId);
    void deleteSelectedStudents(List<Long> selectedIds);

//    void deleteStudents(List<Long> stuId);
//void deleteSelectedStudents(List<Long> selectedIds);


    AddStudent saveStudent(AddStudent addStudent);
}
