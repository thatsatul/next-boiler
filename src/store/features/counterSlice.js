import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated API call (replace with your real API)
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async () => {
    const response = await fetch('/api/increment');
    if (!response.ok) {
      throw new Error('API call failed');
    }
    const data = await response.json();
    return data; // you can use this if needed
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading: false,
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
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
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;