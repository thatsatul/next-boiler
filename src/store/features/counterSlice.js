import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '@/lib/apiClient';

// Simulated API call (replace with your real API)
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async () => {
    const res = await apiCall('/api/increment');
    // if (!response.ok) {
    //   throw new Error('API call failed');
    // }
    console.log('incrementAsync response:', res);
    return res; // you can use this if needed
  }
);

export const decrementAsync = createAsyncThunk('counter/decrementAsync', async () => {
  const res = await apiCall('/api/increment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({ action: 'decrement' }),
  });

  // if (!res.ok) throw new Error('POST failed');
  return await res;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    test: 'hello',
    value: 1,
    loading: false,
    error: null,
  },
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(incrementAsync.fulfilled, (state) => {
        state.loading = false;
        state.value += 1; // Increase count only on success
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(decrementAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(decrementAsync.fulfilled, (state) => {
        state.loading = false;
        state.value -= 1;
      })
      .addCase(decrementAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;