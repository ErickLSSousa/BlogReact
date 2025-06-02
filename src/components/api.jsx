// src/services/api.js
import axios from 'axios';

// Define a base da API JSONPlaceholder
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Função para buscar os usuários
export const buscarUsuarios = async () => {
  try {
    const resposta = await api.get('/users'); // endpoint correto na JSONPlaceholder
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return [];
  }
};

// Função para buscar os posts
export const buscarPosts = async () => {
  try {
    const resposta = await api.get('/posts');
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

// Função para buscar um post específico
export const buscarPostPorId = async (id) => {
  try {
    const resposta = await api.get(`/posts/${id}`);
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar o post:', error);
    return null;
  }
};

// Função para buscar um usuário específico
export const buscarUsuarioPorId = async (id) => {
  try {
    const resposta = await api.get(`/users/${id}`);
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar o usuário:', error);
    return null;
  }
};

export default api;
