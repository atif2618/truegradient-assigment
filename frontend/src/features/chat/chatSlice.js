import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchMessages = createAsyncThunk('chat/fetchMessages', async (_, { rejectWithValue }) => {
  try {
    const res = await api.get('/chat/messages');
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data);
  }
});

export const sendMessage = createAsyncThunk('chat/sendMessage', async (payload, { rejectWithValue }) => {
  try {
    const res = await api.post('/chat/messages', payload);
    // return updated list
    const list = await api.get('/chat/messages');
    return list.data;
  } catch (err) {
    return rejectWithValue(err.response?.data);
  }
});

const chatSlice = createSlice({
  name: 'chat',
  initialState: { messages: [], loading: false, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMessages.pending, state => { state.loading = true; })
      .addCase(fetchMessages.fulfilled, (state, action) => { state.loading = false; state.messages = action.payload; })
      .addCase(fetchMessages.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(sendMessage.fulfilled, (state, action) => { state.messages = action.payload; });
  }
});

export default chatSlice.reducer;
