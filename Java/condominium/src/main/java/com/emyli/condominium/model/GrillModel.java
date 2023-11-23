package com.emyli.condominium.model;

import java.sql.Date;
import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("grill")

public class GrillModel {
    @Id
    private String id;
    private String titulo;
    private Date data;

    public GrillModel(String id, String titulo,  Date data) 
    {
        this.id = id;
        this.titulo = titulo;
        this.data = data;
    }
}
