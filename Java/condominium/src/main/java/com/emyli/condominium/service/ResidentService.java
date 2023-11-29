package com.emyli.condominium.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emyli.condominium.model.ResidentModel;
import com.emyli.condominium.repository.ResidentRepository;

@Service
public class ResidentService {

    @Autowired
    private ResidentRepository residentRepository;

    public void save(ResidentModel residentModel) {
        this.residentRepository.save(residentModel);
    }

    public List<ResidentModel> findAll() {
        return this.residentRepository.findAll();
    }

    public List<ResidentModel> findByName(String nomeCompleto) {
        return this.residentRepository.findByNomeCompleto(nomeCompleto);
    }

    public ResidentModel findByEmail(String email) {
        return this.residentRepository.findByEmail(email);
    }

    public List<ResidentModel> findByCpf(Integer cpf) {
        return this.residentRepository.findByCpf(cpf);
    }

    public List<ResidentModel> findByApAndBloco(short apartamento, String bloco) {
        return this.residentRepository.findByApartamentoAndBloco(apartamento, bloco);
    }

    public List<ResidentModel> findByEmailAndPass(String email, String password) {
        return this.residentRepository.findByEmailAndPass(email, password);
    }

    public void delete(String id) {
        this.residentRepository.deleteById(id);
    }
}
