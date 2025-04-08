package com.contato.lista.Lista_Contatos.config;

import com.contato.lista.Lista_Contatos.entity.Contact;
import com.contato.lista.Lista_Contatos.repository.ContactRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.List;

@Configuration
@Profile("test")
@AllArgsConstructor
public class TestConfig implements CommandLineRunner {

    private ContactRepository contactRepository;

    @Override
    public void run(String... args) throws Exception {
        List<Contact> contacts = List.of(
                new Contact(null, "Alice", "Marie", "Smith", "+55 11 99999-0001", "alice.smith@example.com", ""),
                new Contact(null, "Bruno", "Carlos", "Fernandes", "+55 21 98888-0002", "bruno.fernandes@example.com", ""),
                new Contact(null, "Bruno", "Santos", "Fernandes", "+55 21 98888-0002", "bruno.fernandes@example.com", ""),
                new Contact(null, "Camila", "Fernanda", "Silva", "+55 31 97777-0003", "camila.silva@example.com", ""),
                new Contact(null, "Diego", "André", "Costa", "+55 41 96666-0004", "diego.costa@example.com", ""),
                new Contact(null, "Eduarda", "Beatriz", "Souza", "+55 51 95555-0005", "eduarda.souza@example.com", "")

        );

        contactRepository.saveAll(contacts);
    }
}
