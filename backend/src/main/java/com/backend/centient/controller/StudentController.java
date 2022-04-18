package com.backend.centient.controller;

import com.backend.centient.model.Student;
import com.backend.centient.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.backend.centient.model.Student;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class StudentController {
    @Autowired
    private com.backend.centient.repository.StudentRepository StudentRepo;

    @GetMapping("/students")
    public String listAll(Model model) {
        List<Student> listStudents = StudentRepo.findAll();
        model.addAttribute("listStudents", listStudents);

        return "students";
    }

}
