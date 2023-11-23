package com.emyli.condominium.model;

import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("complaints")

public class ComplaintsModel {
    @Id
    private String id;
    private String titulo;
    private String descricao;


    public ComplaintsModel(String id, String titulo, String descricao) 
    {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
    }
}
