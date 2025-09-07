import { useEffect, useState } from 'react';
import api from './api';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';


export default function App() {
const [notes, setNotes] = useState([]);
const [q, setQ] = useState('');
const [loading, setLoading] = useState(false);


async function load() {
setLoading(true);
const { data } = await api.get('/notes', { params: { q } });
setNotes(data);
setLoading(false);
}


useEffect(() => {
load();
}, [q]);


async function add(note) {
await api.post('/notes', note);
load();
}


async function update(id, note) {
await api.put(`/notes/${id}`, note);
load();
}


async function remove(id) {
await api.delete(`/notes/${id}`);
load();
}


async function togglePin(note) {
await api.put(`/notes/${note._id}`, { ...note, pinned: !note.pinned });
load();
}


return (
<div className="max-w-2xl mx-auto p-4">
<h1 className="text-3xl font-bold text-center mb-4">Notes App</h1>

<NoteForm onAdd={add} />

<div className="my-4">
<input
type="text"
className="w-full p-2 border border-gray-300 rounded"
placeholder="Search notes..."
value={q}
onChange={e => setQ(e.target.value)}
/>
</div>

{loading ? (
<div className="text-center text-gray-500">Loading...</div>
) : (
<NoteList notes={notes} onUpdate={update} onDelete={remove} onTogglePin={togglePin} />
)}
</div>
);
}


export default App;

