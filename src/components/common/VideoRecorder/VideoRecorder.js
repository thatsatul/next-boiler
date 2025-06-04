'use client';

import { useRef, useState } from 'react';

export default function VideoRecorder() {
  const videoRef = useRef(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [stream, setStream] = useState(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;
    setStream(stream);

    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);

    recorder.onstop = async () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const formData = new FormData();
      formData.append('video', blob, 'recording.webm');

      await fetch('/api/video', {
        method: 'POST',
        body: formData,
      });
    };

    recorder.start();
    setMediaRecorder(recorder);
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    stream?.getTracks().forEach(track => track.stop());
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted width={400} />
      <br />
      <button onClick={startRecording}>Start</button>
      <button onClick={stopRecording}>Stop & Upload</button>
    </div>
  );
}
