package com.contato.lista.Lista_Contatos.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ContactDto {
    private String name;

    private String middleName;

    private String lastName;

    private String phone;

    private String email;
}
