package com.contato.lista.Lista_Contatos.service;

import com.contato.lista.Lista_Contatos.dto.ContactDto;
import com.contato.lista.Lista_Contatos.entity.Contact;
import com.contato.lista.Lista_Contatos.repository.ContactRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@AllArgsConstructor
@Service
public class ContactService {

    private ContactRepository contactRepository;

    public Contact create(ContactDto contactDto, MultipartFile avatar) {
        try {
            return contactRepository.save(Contact.builder()
                    .name(contactDto.getName())
                    .phone(contactDto.getPhone())
                    .email(contactDto.getEmail())
                    .avatar(armazenamentoImagem(avatar))
                    .build());
        }catch (Exception e) {
            System.out.println("Deu falha em salvar o contato");
        }
        return null;
    }

    public Contact update(long id, ContactDto contactDto) {
        Optional<Contact> contactById = contactRepository.findById(id);
        return contactById.map(contact -> contactRepository.save(Contact.builder()
                .Id(contact.getId())
                .name(contactDto.getName())
                .phone(contactDto.getPhone())
                .email(contactDto.getEmail())
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

    private String armazenamentoImagem(MultipartFile avatar) throws IOException {
        final var folderPath = new File("src/main/resources").getAbsolutePath();
        Files.createDirectories(Paths.get(folderPath));

        Path filePath = Paths.get(folderPath, avatar.getOriginalFilename());

        avatar.transferTo(filePath);

        return folderPath + "/" + filePath.getFileName().toString();
    }

}
