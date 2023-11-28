package com.emyli.condominium.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("resident")

public class ResidentModel {
    @Id
    private String id;
    private String nomeCompleto;
    private String cpf;
    private String password;
    private String email;
    private Short apartamento;
    private String bloco;

    public ResidentModel()
    {

    }

}
