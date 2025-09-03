import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StudentList from './components/StudentList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentList />
    <h1>Hello, world!</h1>
    <App />
  </StrictMode>,
)
