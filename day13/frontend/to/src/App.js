// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    await axios.post('http://localhost:5000/register', { username, password });
    alert('Registered!');
  };

  const login = async () => {
    const res = await axios.post('http://localhost:5000/login', { username, password });
    alert('Token: ' + res.data.token);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>WebApp Auth</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} /><br />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;