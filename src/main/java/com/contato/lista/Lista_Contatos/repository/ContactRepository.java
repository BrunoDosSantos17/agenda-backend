package com.contato.lista.Lista_Contatos.repository;

import com.contato.lista.Lista_Contatos.entity.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {

    //Contact findByFirstName(String name);

}
