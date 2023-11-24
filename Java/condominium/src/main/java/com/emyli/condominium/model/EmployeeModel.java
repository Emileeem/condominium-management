package com.emyli.condominium.model;

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
}
