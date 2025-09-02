import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
    setInput('');
  };

  const handleToggle = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div style={styles.wrapper}>
      <h1>📝 To-Do List</h1>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addBtn}>Add</button>
      </div>
      <ul style={styles.list}>
        {tasks.map(task => (
          <li key={task.id} style={styles.item}>
            <span
              onClick={() => handleToggle(task.id)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)} style={styles.delBtn}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'sans-serif',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '8px',
    fontSize: '16px',
  },
  addBtn: {
    padding: '8px 12px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: '20px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  },
  delBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default TodoApp;