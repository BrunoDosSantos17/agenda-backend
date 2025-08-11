import axios from 'axios';
import { Contact } from './type';

const api = axios.create({baseURL: 'http://localhost:8080'});

export const listPessoas = async () => {
      const response = await api.get('/contacts');
      return response.data;
  };

export const createPessoa = async (pessoa: Contact, avatar?: File) => {
  const formData = new FormData();

  // Envia o DTO como um JSON no campo "contact"
  formData.append(
    "contact",
    new Blob([JSON.stringify(pessoa)], { type: "application/json" })
  );

  // Envia a imagem no campo "avatar"
  if (avatar) {
    formData.append("avatar", avatar);
  }

  const response = await api.post("/contacts/create", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};