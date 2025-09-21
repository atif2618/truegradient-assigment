// src/services/chatService.js
import axios from 'axios';
import { getToken } from './authService';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const authHeaders = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});

// Send a chat message
export const sendMessage = async (message) => {
  const res = await axios.post(`${API_URL}/api/chat/send`, { message }, authHeaders());
  return res.data; // your backend should return the saved message
};

// Get chat messages
export const getMessages = async () => {
  const res = await axios.get(`${API_URL}/api/chat/messages`, authHeaders());
  return res.data; // list of messages
};

// Get notifications
export const getNotifications = async () => {
  const res = await axios.get(`${API_URL}/api/notifications`, authHeaders());
  return res.data; // list of notifications
};

// Mark a notification as read
export const markNotificationRead = async (id) => {
  const res = await axios.put(`${API_URL}/api/notifications/${id}`, {}, authHeaders());
  return res.data;
};
