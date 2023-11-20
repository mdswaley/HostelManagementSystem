package com.example.registration;

import com.example.registration.Entity.Emp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface EmpRepo extends JpaRepository<Emp,Integer> {
    Optional<Emp>findOneByUserEmailAndUserPassAndWarId(String userEmail, String userPass, String warId);
    Emp findByUserEmail(String userEmail);

}
