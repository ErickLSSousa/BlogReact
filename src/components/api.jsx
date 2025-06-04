import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const buscarUsuarios = async () => {
  try {
    const resposta = await api.get('/users');
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return [];
  }
};

export const buscarPosts = async () => {
  try {
    const resposta = await api.get('/posts');
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

export const buscarPostPorId = async (id) => {
  try {
    const resposta = await api.get(`/posts/${id}`);
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar o post:', error);
    return null;
  }
};

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