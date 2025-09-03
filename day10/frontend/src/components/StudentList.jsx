import { useEffect, useState } from 'react';
import axios from 'axios';
import { Student } from '../types';

const API = 'http://localhost:5000/api/students';

function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [form, setForm] = useState({ name: '', email: '', age: '' });

  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post(API, { ...form, age: Number(form.age) });
    setForm({ name: '', email: '', age: '' });
    fetchStudents();
  };

  return (
    <div>
      <h2>Student Directory</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Age" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} />
        <button type="submit">Add Student</button>
      </form>
      <ul>
        {students.map(s => (
          <li key={s.id}>{s.name} ({s.email}) - Age: {s.age}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;