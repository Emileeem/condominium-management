package com.emyli.condominium.model;

import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("employee")

public class EmployeeModel {
    @Id
    private String id;
    private String nomeCompleto;
    private Integer cpf;
    private String password;
    private String email;

    public EmployeeModel(String id, String nomeCompleto,  String password, String email, Integer cpf) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.password = password;
        this.email = email;
    }
}
