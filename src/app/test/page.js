'use client';

import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync, decrementAsync } from '@/store/features/counterSlice';

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.counter.loading);
  const error = useSelector((state) => state.counter.error);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementAsync())} disabled={loading}>
        {loading ? 'Loading...' : 'Increment (GET)'}
      </button>
      <button onClick={() => dispatch(decrementAsync())} disabled={loading}>
        {loading ? 'Loading...' : 'Decrement (POST)'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </main>
  );
}