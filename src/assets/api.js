import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com'
});

export const buscarUsuarios = async () => {
  try {
    const resposta = await api.get('/usuarios');
    return resposta.data;
  } catch (error) {
    console.error(error);
  }
};

export default api;