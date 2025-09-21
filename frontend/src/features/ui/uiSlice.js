import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchNotifications = createAsyncThunk('ui/fetchNotifications', async (_, { rejectWithValue }) => {
  try {
    const res = await api.get('/notifications');
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data);
  }
});

const uiSlice = createSlice({
  name: 'ui',
  initialState: { notifications: [], notifOpen: false, loading: false },
  reducers: {
    toggleNotif(state) { state.notifOpen = !state.notifOpen; }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNotifications.pending, state => { state.loading = true; })
      .addCase(fetchNotifications.fulfilled, (state, action) => { state.loading = false; state.notifications = action.payload; })
      .addCase(fetchNotifications.rejected, state => { state.loading = false; });
  }
});

export const { toggleNotif } = uiSlice.actions;
export default uiSlice.reducer;
