package com.example.registration;

import com.example.registration.Entity.AddStudent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface StuRepo extends JpaRepository<AddStudent,Long> {
//    void deleteAllByStuIdIn(List<Long> stuId);
void deleteByStuIdIn(List<Long> stuIds);

}
