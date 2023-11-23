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
@Document("value")
public class CondominiumValue {
    @Id
    Integer valor;
    
    public CondominiumValue(Integer valor)
    {
        this.valor = valor;
    }
}
