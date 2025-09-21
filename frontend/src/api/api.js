
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2000', // 👈 point to your backend
  withCredentials: true // if you use cookies
});

export default api;
