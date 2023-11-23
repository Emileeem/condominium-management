package com.emyli.condominium.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.emyli.condominium.model.EmployeeModel;

import java.util.List;

public interface EmployeeRepository extends MongoRepository<EmployeeModel, String> {
    
    @Query("{'name': ?0}")
    List<EmployeeModel> findByNomeCompleto(String nomeCompleto);

    @Query("{'email: ?0'}")
    List<EmployeeModel> findByEmail(String email);

    @Query("{'cpf: ?0'}")
    List<EmployeeModel> findByCpf(Integer cpf);

}