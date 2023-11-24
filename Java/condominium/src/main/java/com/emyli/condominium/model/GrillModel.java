package com.emyli.condominium.model;

import java.sql.Date;
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

}
