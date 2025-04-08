package com.contato.lista.Lista_Contatos.dto;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContactDto {
    private String name;

    private String middleName;

    private String lastName;

    private String phone;

    private String email;

    private String avatar;
}
