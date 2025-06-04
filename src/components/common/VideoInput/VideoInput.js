'use client';

import { useRef, useState } from 'react';

export default function VideoInput() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streaming, setStreaming] = useState(false);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    setStreaming(true);

    sendFrames(); // ⬅️ Start sending frames
  };

  const sendFrames = () => {
    const interval = setInterval(async () => {
      if (!streaming) return clearInterval(interval);

      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(async (blob) => {
        if (blob) {
          const formData = new FormData();
          formData.append('frame', blob, 'frame.jpg');

          await fetch('/api/frame', {
            method: 'POST',
            body: formData,
          });
        }
      }, 'image/jpeg');
    }, 500); // ⏱ every 500ms (adjust as needed)
  };

  return (
    <div>
      <button onClick={startCamera}>Start Stream</button>
      <video ref={videoRef} autoPlay playsInline muted width={300} height={200} />
      <canvas ref={canvasRef} width={300} height={200} style={{ display: 'none' }} />
    </div>
  );
}