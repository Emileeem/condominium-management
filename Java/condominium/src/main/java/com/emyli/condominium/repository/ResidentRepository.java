package com.emyli.condominium.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.emyli.condominium.model.ResidentModel;

import java.util.List;

public class ResidentRepository {

    @Query("{'name': ?0}")
    List<ResidentModel> findByNomeCompleto(String nomeCompleto);

    @Query("{'email: ?0'}")
    List<ResidentModel> findByEmail(String email);

    @Query("{'cpf: ?0'}")
    List<ResidentModel> findByCpf(Integer cpf);

    @Query("{'apartamento:' ?1, 'bloco': ?0}")
    List<ResidentModel> findByApartamentoAndBloco(short apartamento, String bloco);
}
