package com.contato.lista.Lista_Contatos.service;

import com.contato.lista.Lista_Contatos.dto.ContactDto;
import com.contato.lista.Lista_Contatos.entity.Contact;
import com.contato.lista.Lista_Contatos.repository.ContactRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class ContactServiceTest {
    @Mock
    private ContactRepository contactRepository;

    @InjectMocks
    private ContactService contactService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreate() {
        // Arrange
        ContactDto contactDto = new ContactDto("John", "123456789", "john@example.com", "Middle", "Doe");
        Contact expectedContact = Contact.builder()
                .name("John")
                .phone("123456789")
                .email("john@example.com")
                .middleName("Middle")
                .lastName("Doe")
                .build();

        when(contactRepository.save(any(Contact.class))).thenReturn(expectedContact);

        // Act
        Contact createdContact = contactService.create(contactDto);

        // Assert
        assertNotNull(createdContact);
        assertEquals(expectedContact.getName(), createdContact.getName());
        assertEquals(expectedContact.getEmail(), createdContact.getEmail());
        verify(contactRepository, times(1)).save(any(Contact.class));
    }

    @Test
    void testFindName() {
        // Arrange
        String name = "John";
        Contact expectedContact = Contact.builder()
                .name("John")
                .phone("123456789")
                .email("john@example.com")
                .build();

        when(contactRepository.findByFirstName(name)).thenReturn(expectedContact);

        // Act
        Contact foundContact = contactService.findName(name);

        // Assert
        assertNotNull(foundContact);
        assertEquals(expectedContact.getName(), foundContact.getName());
        verify(contactRepository, times(1)).findByFirstName(name);
    }
}
