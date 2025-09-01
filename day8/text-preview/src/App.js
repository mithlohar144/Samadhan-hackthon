import React, { useState } from 'react';

function CounterAndPreview() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* Counter Section */}
      <h2>🧮 Counter</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span style={{ fontSize: '1.5rem' }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      {/* Text Preview Section */}
      <h2 style={{ marginTop: '2rem' }}>📝 Live Text Preview</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', maxWidth: '400px' }}
      />
      <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
        Preview: <strong>{text || 'Nothing yet...'}</strong>
      </p>
    </div>
  );
}

export default CounterAndPreview;