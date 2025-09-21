
import axios from 'axios';

const api = axios.create({
  baseURL: 'truegradient-assigment-gq6u.vercel.app', // 👈 point to your backend
  withCredentials: true // if you use cookies
});

export default api;

