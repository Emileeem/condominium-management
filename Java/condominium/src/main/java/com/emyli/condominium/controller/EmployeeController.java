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

import com.emyli.condominium.model.EmployeeModel;
import com.emyli.condominium.service.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("")
    public List<EmployeeModel> getAllUser() {
        List<EmployeeModel> listRes = employeeService.findAll();
        return listRes;
    }

    // @PostMapping("/file")
    // public void testeFIle(MultipartFile file) throws IOException {
    // employeeService.saveImage(file);
    // }

    @GetMapping("/{nomeCompleto}")
    public List<EmployeeModel> getEmployeeByName(@PathVariable String name) {
        List<EmployeeModel> listRes = employeeService.findByName(name);
        return listRes;
    }

    @GetMapping("/{cpf}")
    public List<EmployeeModel> getEmployeeByAgeAndName(@PathVariable Integer cpf) {
        List<EmployeeModel> listRes = employeeService.findByCpf(cpf);
        return listRes;
    }

    @GetMapping("/{email}")
    public List<EmployeeModel> getEmployeeByAgeAndName(@PathVariable String email) {
        List<EmployeeModel> listRes = employeeService.findByEmail(email);
        return listRes;
    }

    @PostMapping("")
    public void newEmployee(@RequestBody EmployeeModel newEmployee) {
        employeeService.save(newEmployee);
    }

    @PutMapping("/{id}")
    public void putUser(@RequestBody EmployeeModel newEmployee, @PathVariable String id) {
        employeeService.save(new EmployeeModel(id, newEmployee.getNomeCompleto(), newEmployee.getCpf(), newEmployee.getPassword(), newEmployee.getEmail()));
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable String id) {
        employeeService.delete(id);
    }

}
