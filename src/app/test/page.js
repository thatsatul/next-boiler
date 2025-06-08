'use client';

// import VideoInput from '@/components/common/VideoInput/VideoInput';
import VideoRecorder from '@/components/common/VideoRecorder/VideoRecorder';

export default function Test() {

  return (
    <main>
      {/* <VideoInput onStreamReady={handleStream} /> */}
      <VideoRecorder />
    </main>
  );
}
