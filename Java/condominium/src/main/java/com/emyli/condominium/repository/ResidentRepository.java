package com.emyli.condominium.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.emyli.condominium.model.ResidentModel;

import java.util.List;

public interface ResidentRepository extends MongoRepository<ResidentModel, String> {

    @Query("{'name': ?0}")
    List<ResidentModel> findByNomeCompleto(String nomeCompleto);

    @Query("{'email': ?0}")
    ResidentModel findByEmail(String email);

    @Query("{'cpf': ?0'}")
    List<ResidentModel> findByCpf(Integer cpf);

    @Query("{'apartamento': ?1, 'bloco': ?0}")
    List<ResidentModel> findByApartamentoAndBloco(short apartamento, String bloco);

    @Query("{'email': ?1, 'password' :?0}")
    List<ResidentModel> findByEmailAndPass(String email, String password);
}
