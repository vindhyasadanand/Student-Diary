package com.backend.studentsystem.service;

import java.util.List;

import com.backend.studentsystem.model.Student;

public interface StudentService 
{
	public Student saveStudent(Student student);
	public List<Student> getAllStudents();
}
