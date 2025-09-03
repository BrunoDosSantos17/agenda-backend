package com.contato.lista.Lista_Contatos.dto;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContactDto {
    private String name;

    private String phone;

    private String email;
}
