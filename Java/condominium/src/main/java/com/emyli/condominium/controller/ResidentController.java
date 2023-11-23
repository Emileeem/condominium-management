package com.emyli.condominium.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emyli.condominium.model.ResidentModel;
import com.emyli.condominium.service.ResidentService;

@RestController
@RequestMapping("/user")
public class ResidentController {
    
    @Autowired
    private ResidentService residentService;

    @GetMapping("")
    public List<ResidentModel> getAllUser() {
        List<ResidentModel> listRes = residentService.findAll();
        return listRes;
    }

    // @PostMapping("/file")
    // public void testeFIle(MultipartFile file) throws IOException {
    // residentService.saveImage(file);
    // }

    @GetMapping("/{nomeCompleto}")
    public List<ResidentModel> getEmployeeByName(@PathVariable String name) {
        List<ResidentModel> listRes = residentService.findByName(name);
        return listRes;
    }

    @GetMapping("/{cpf}")
    public List<ResidentModel> getEmployeeByAgeAndName(@PathVariable Integer cpf) {
        List<ResidentModel> listRes = residentService.findByCpf(cpf);
        return listRes;
    }

    @GetMapping("/{email}")
    public List<ResidentModel> getEmployeeByAgeAndName(@PathVariable String email) {
        List<ResidentModel> listRes = residentService.findByEmail(email);
        return listRes;
    }

    @PostMapping("")
    public void newResident(@RequestBody ResidentModel newResident) {
        residentService.save(newResident);
    }

    @PutMapping("/{id}")
    public void putUser(@RequestBody ResidentModel newResident, @PathVariable String id) {
        residentService.save((String) id, (String) newResident.getNomeCompleto(), (Integer) newResident.getCpf(), (String) newResident.getEmail());
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable String id) {
        residentService.delete(id);
    }
}
