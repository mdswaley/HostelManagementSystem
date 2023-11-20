package com.example.registration.EmpController;
import com.example.registration.Dto.AddStuDto;
import com.example.registration.EmpService.StuSer;
import com.example.registration.Entity.AddStudent;
import com.example.registration.Entity.TakingAttendance;
import com.example.registration.ResourceNotFoundExcp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/addstu")
public class StuCont {
    @Autowired
    private StuSer stuSer;

    @PostMapping(path = "/addStudent")
    public String saveStudent(@RequestBody AddStuDto addStuDto)
    {
        String StuId = stuSer.addStudent1(addStuDto);
        return StuId;
    }
    @GetMapping("/allStudents")
    public List<AddStudent> getAllStudents() {
        return stuSer.getAllStudent(); // Assume this method fetches all students from the service
    }
    @GetMapping("/findStudent/{id}")
    public ResponseEntity<AddStudent> getempbyid(@PathVariable("id")Long stuId){
        return new ResponseEntity<>(stuSer.getStudentById(stuId), HttpStatus.FOUND);

    }
    @PostMapping("/addSelectedStudents")
    public ResponseEntity<String> addSelectedStudents(@RequestBody List<Long> selectedIds) {
        try {
            stuSer.addSelectedStudents(selectedIds);
            return new ResponseEntity<>("Selected students added successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error adding selected students: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/getatt")
    public List<TakingAttendance> getAllAtt() {
        return stuSer.getAllAtt(); // Assume this method fetches all students from the service
    }
//    @DeleteMapping("/deleteStu/{id}")
//    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long stuId) {
//
//        AddStudent existingEmployee = stuSer.getStudentById(stuId);
//
//        if (existingEmployee != null) {
//            stuSer.deleteMap(stuId);
//            return new ResponseEntity<>("Student with ID " + stuId + " deleted successfully", HttpStatus.OK);
//        } else {
//            throw new ResourceNotFoundExcp("Student", "ID", stuId);
//        }
//    }
@DeleteMapping("/deleteStu/{ids}")
public ResponseEntity<String> deleteSelectedStudents(@PathVariable("ids") List<Long> ids) {
    stuSer.deleteSelectedStudents(ids);
    return new ResponseEntity<>("Selected students deleted successfully", HttpStatus.OK);
}

    @PutMapping("/updateStu/{id}")
    public ResponseEntity<AddStudent> updateStudent(@PathVariable("id") Long stuId, @RequestBody AddStudent updatedStudent) {
        AddStudent existingStudent = stuSer.getStudentById(stuId);

        if (existingStudent != null) {

            existingStudent.setStuAddress(updatedStudent.getStuAddress());
            existingStudent.setStuCity(updatedStudent.getStuCity());
            existingStudent.setStuCatg(updatedStudent.getStuCatg());
            existingStudent.setStuContact(updatedStudent.getStuContact());
            existingStudent.setStuFatherCon(updatedStudent.getStuFatherCon());
            existingStudent.setStuHostNo(updatedStudent.getStuHostNo());
            existingStudent.setStuRoomNo(updatedStudent.getStuRoomNo());
            existingStudent.setStuReg(updatedStudent.getStuReg());
            existingStudent.setStuStatus(updatedStudent.getStuStatus());
            existingStudent.setUserName(updatedStudent.getUserName());

            AddStudent updated = stuSer.saveStudent(existingStudent);
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            throw new ResourceNotFoundExcp("Student", "ID", stuId);
        }
    }
}
