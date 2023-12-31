package com.emyli.condominium.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emyli.condominium.model.ResidentModel;
import com.emyli.condominium.repository.ResidentRepository;
import com.emyli.condominium.service.ResidentService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
public class ResidentController {
    
    @Autowired
    private ResidentService residentService;
    private ResidentRepository residentRepository;

    @GetMapping("")
    public List<ResidentModel> getAllUser() {
        List<ResidentModel> listRes = residentService.findAll();
        return listRes;
    }

    // @GetMapping("/{email}")
    // public ResidentModel getResidentByEmail(@PathVariable String email) {
    //     ResidentModel listRes = residentService.findByEmail(email);
    //     return listRes;
    // }

    // @GetMapping("/me")
    // public ResidentModel getResidentByNome() {
    //     ResidentModel listRes = null;
    //     if (name.equals("loggedUser")) {
    //         String currentUserUsername = residentRepository.findByUsername(nome).getNomeCompleto();
    //         listRes = residentService.findByName(currentUserUsername);
    //     } else {
    //         listRes = residentService.findByName(nome);
    //     }

    //     return listRes;
    // }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody ResidentModel resident) {
        // Recupere o ResidentModel com base no email
        var residents = residentService.findByEmail(resident.getEmail());

        // Verifique se existe um ResidentModel com o email fornecido
        if (residents == null) {
            return new ResponseEntity<>("Usuário não encontrado", HttpStatus.NOT_FOUND);
        }


        // Verifique se a senha está correta
        if (residents.getPassword().equals(resident.getPassword())) {
            return new ResponseEntity<>("Login bem-sucedido", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Senha incorreta", HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("")
    public void newResident(@RequestBody ResidentModel newResident) {
        residentService.save(newResident);
    }

    @PutMapping("/{id}")
    public void putUser(@RequestBody ResidentModel newResident, @PathVariable String id) {
        residentService.save(new ResidentModel(id, newResident.getNomeCompleto(), newResident.getPassword(), newResident.getEmail(), newResident.getBloco(), newResident.getApartamento(), newResident.getCpf()));
    }

    @DeleteMapping("/{id}")
    public void deleteResident(@PathVariable String id) {
        residentService.delete(id);
    }
}