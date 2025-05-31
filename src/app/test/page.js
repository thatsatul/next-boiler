'use client';

import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync, decrement } from '@/store/features/counterSlice';

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.counter.loading);
  const error = useSelector((state) => state.counter.error);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementAsync())} disabled={loading}>
        {loading ? 'Loading...' : 'Async +1'}
      </button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </main>
  );
}