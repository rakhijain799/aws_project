package com.aws_project.aws_project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aws_project.aws_project.Entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
    
}
