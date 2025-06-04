import axios from 'axios';

const apipost= axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

const apiuser = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export const buscarUsuarios = async () => {
  try {
    const resposta = await apiuser.get('/users');
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return [];
  }
};

export const buscarPosts = async () => {
  try {
    const resposta = await apipost.get('/posts');
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

export const buscarPostPorId = async (id) => {
  try {
    const resposta = await apipost.get(`/posts/${id}`);
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar o post:', error);
    return null;
  }
};

export const buscarUsuarioPorId = async (id) => {
  try {
    const resposta = await apiuser.get(`/users/${id}`);
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar o usuário:', error);
    return null;
  }
};

