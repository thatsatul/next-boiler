'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendQuery, addChatMessage } from '@/store/features/chatSlice'; // Adjust the import path as necessary

export default function ChatPage() {
  const messages = useSelector(state => state.chat.chat.data) || [];
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const hasMounted = useRef(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const mssg = { current_action: 'USER_INPUT', text: input, type: 'TEXT', id: Date.now() };
    dispatch(addChatMessage(mssg));
    dispatch(sendQuery(mssg));
    setInput('');
  };

  useEffect(() => {
    if (!hasMounted.current) {
      console.log('ChatPage mounted, sending initial query');
      dispatch(sendQuery());
      hasMounted.current = true;
    }
  }, [dispatch]);

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', border: '1px solid #ccc', borderRadius: 8, padding: 24 }}>
      <h2>Chat</h2>
      <div style={{ minHeight: 200, marginBottom: 16, overflowY: 'auto', background: '#f9f9f9', padding: 12, borderRadius: 4 }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ margin: '8px 0', padding: 8, background: '#e6f7ff', borderRadius: 4 }}>
            {msg.text}
          </div>
        ))}
      </div>
      {loading && <div style={{ textAlign: 'center', marginBottom: 16 }}>Loading...</div>}
      <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 16px', borderRadius: 4, background: '#1890ff', color: '#fff', border: 'none' }}>
          Send
        </button>
      </form>
    </div>
  );
}