package com.emyli.condominium.model;

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

}
