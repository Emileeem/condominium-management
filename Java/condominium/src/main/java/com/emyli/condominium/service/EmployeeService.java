package com.emyli.condominium.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emyli.condominium.model.EmployeeModel;
import com.emyli.condominium.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public void save(EmployeeModel employeeModel) {
        this.employeeRepository.save(employeeModel);
    }

    public List<EmployeeModel> findAll() {
        return this.employeeRepository.findAll();
    }

    public List<EmployeeModel> findByName(String nomeCompleto) {
        return this.employeeRepository.findByNomeCompleto(nomeCompleto);
    }

    public List<EmployeeModel> findByEmail(String email) {
        return this.employeeRepository.findByEmail(email);
    }

    public List<EmployeeModel> findByCpf(Integer cpf) {
        return this.employeeRepository.findByCpf(cpf);
    }

    public void delete(String id) {
        this.employeeRepository.deleteById(id);
    }

}