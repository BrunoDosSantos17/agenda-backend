package com.contato.lista.Lista_Contatos.service;

import com.contato.lista.Lista_Contatos.dto.ContactDto;
import com.contato.lista.Lista_Contatos.entity.Contact;
import com.contato.lista.Lista_Contatos.repository.ContactRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class ContactService {

    private ContactRepository contactRepository;

    public Contact create(ContactDto contactDto) {
        return contactRepository.save(Contact.builder()
                .name(contactDto.getName())
                .phone(contactDto.getPhone())
                .email(contactDto.getEmail())
                .middleName(contactDto.getMiddleName())
                .lastName(contactDto.getLastName())
                .build());
    }

    public Contact findName(String name) {
        return contactRepository.findByFirstName(name);
    }

}
