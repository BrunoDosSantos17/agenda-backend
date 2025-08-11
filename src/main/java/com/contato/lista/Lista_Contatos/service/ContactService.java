package com.contato.lista.Lista_Contatos.service;

import com.contato.lista.Lista_Contatos.dto.ContactDto;
import com.contato.lista.Lista_Contatos.entity.Contact;
import com.contato.lista.Lista_Contatos.repository.ContactRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.util.Optional;

@AllArgsConstructor
@Service
public class ContactService {

    private ContactRepository contactRepository;

    public Contact create(ContactDto contactDto, MultipartFile avatar) {
        return contactRepository.save(Contact.builder()
                .name(contactDto.getName())
                .phone(contactDto.getPhone())
                .email(contactDto.getEmail())
                .middleName(contactDto.getMiddleName())
                .lastName(contactDto.getLastName())
                .avatar(avatar.getOriginalFilename())
                .build());
    }

    public Contact update(long id, ContactDto contactDto) {
        Optional<Contact> contactById = contactRepository.findById(id);
        return contactById.map(contact -> contactRepository.save(Contact.builder()
                .Id(contact.getId())
                .name(contactDto.getName())
                .phone(contactDto.getPhone())
                .email(contactDto.getEmail())
                .middleName(contactDto.getMiddleName())
                .lastName(contactDto.getLastName())
                .avatar("")
                .build())).orElse(null);
    }

    public void remove(long id) {
        if(contactRepository.findById(id).isPresent())
            contactRepository.deleteById(id);
    }

    public Iterable<Contact> getAll() {
        return contactRepository.findAll();
    }

}
