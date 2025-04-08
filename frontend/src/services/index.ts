import axios from 'axios';
import { Contacts } from './type';

const api = axios.create({baseURL: 'http://localhost:8080'});

export const listPessoas = async () => {
      const response = await api.get('/contacts');
      return response.data;
  };

export const createPessoa = async (pessoa: Contacts) => {
    const response = await api.post('/contacts', pessoa);
    return response.data;
};