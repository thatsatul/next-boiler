import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '@/lib/apiClient';

export const sendQuery = createAsyncThunk('chat/sendQuery', async (payload = null) => {
  let finalPayload = payload;
  if (!payload) {
    finalPayload = {
      current_action: 'START_CHAT'
    };
  }
  const res = await apiCall('/api/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(finalPayload),
  });

  return res;
});

const querySlice = createSlice({
  name: 'chat',
  initialState: {
    chat: {
      data: [],
      loading: false,
      error: null,
    }
  },
  reducers: {
    addChatMessage: (state, action) => {
      console.log('addChatMessage', state, action);
      state.chat.data.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendQuery.pending, (state, action) => {
        console.log('sendQuery.pending', state, action);
        state.chat.loading = true;
        state.chat.error = null;
      })
      .addCase(sendQuery.fulfilled, (state, action) => {
        console.log('sendQuery.fulfilled', state, action);
        state.chat.loading = false;
        // Add the response to chat.data array
        state.chat.data = [...state.chat.data, action.payload.data];
        console.log('Updated chat data:', state.chat.data);
      })
      .addCase(sendQuery.rejected, (state, action) => {
        console.log('sendQuery.rejected', state, action);
        state.chat.loading = false;
        state.chat.error = true;
      });
  },
});

export const { addChatMessage } = querySlice.actions;
export default querySlice.reducer;
