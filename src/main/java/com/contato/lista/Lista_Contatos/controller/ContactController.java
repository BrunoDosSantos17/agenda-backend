package com.contato.lista.Lista_Contatos.controller;

import com.contato.lista.Lista_Contatos.dto.ContactDto;
import com.contato.lista.Lista_Contatos.entity.Contact;
import com.contato.lista.Lista_Contatos.service.ContactService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("contacts")
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<Contact> createContact(@RequestBody ContactDto contactDto) {
        return ResponseEntity.ok(contactService.create(contactDto));
    }

    @GetMapping
    public Iterable<Contact> getAllContacts(){
        return contactService.getAll();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ContactDto> update(@PathVariable Long id, @RequestBody ContactDto contactDto ){
        var contact = contactService.update(id, contactDto);

        return ResponseEntity.ok(ContactDto.builder()
                .name(contact.getName())
                .middleName(contact.getMiddleName())
                .lastName(contact.getLastName())
                .email(contact.getEmail())
                .phone(contact.getPhone())
                .build());
    }

}
