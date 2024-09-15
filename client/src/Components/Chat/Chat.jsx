import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // Simple bot response logic
      setMessages([...messages, { text: input, isUser: true }, { text: "Bot: Sorry, I don't understand that.", isUser: false }]);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default Enter key behavior
      handleSend();
    }
  };

  return (
    <div className='Chat-Main-Box'>
      <div className='Chat-Messages'>
        {messages.map((msg, index) => (
          <div key={index} className={`Chat-Message ${msg.isUser ? 'User' : 'Bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className='Chat-Input-Box'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // Handle Enter key press
          placeholder='Type a message...'
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
