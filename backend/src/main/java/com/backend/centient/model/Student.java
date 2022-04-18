package com.backend.centient.model;

import javax.persistence.*;

@Entity
@Table(name = "Student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="full_name")
    private String name;

    @Column(name="email")
    private String email;

    public Student(){
        super();
    }
    public Student(Integer id, String name, String email){
        super();
        this.id=id;
        this.name=name;
        this.email=email;
    }

    public Integer getId() {

        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
