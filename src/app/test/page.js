'use client';

import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync, decrementAsync } from '@/store/features/counterSlice';
// import VideoInput from '@/components/common/VideoInput/VideoInput';
import VideoRecorder from '@/components/common/VideoRecorder/VideoRecorder';

export default function Home() {
  const test = useSelector((state) => state.counter.test);
  console.log('test:', test);
  const count = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.counter.loading);
  const error = useSelector((state) => state.counter.error);
  const dispatch = useDispatch();

  const handleStream = (stream) => {
    console.log('Stream received:', stream);
    // You could now record, analyze, or send this stream
  };

  return (
    <main>
      <h1>Count: {count} {test}</h1>
      <button onClick={() => dispatch(incrementAsync())} disabled={loading}>
        {loading ? 'Loading...' : 'Increment (GET)'}
      </button>
      <button onClick={() => dispatch(decrementAsync())} disabled={loading}>
        {loading ? 'Loading...' : 'Decrement (POST)'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {/* <VideoInput onStreamReady={handleStream} /> */}
      <VideoRecorder />
    </main>
  );
}
