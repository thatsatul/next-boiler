import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import chatReducer from './features/chatSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatReducer,
  },
});
