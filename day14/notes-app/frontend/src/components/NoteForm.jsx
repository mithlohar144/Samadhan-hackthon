import { useState } from 'react';


export default function NoteForm({ onSubmit }) {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [tags, setTags] = useState('');


function handleSubmit(e) {
e.preventDefault();
onSubmit({ title, content, tags: tags.split(',').map(t => t.trim()).filter(Boolean) });
setTitle(''); setContent(''); setTags('');
}


return (
<form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow mb-4 grid gap-2">
<h2 className="text-xl font-semibold">Add Note</h2>
<input className="border p-2 rounded" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
<textarea className="border p-2 rounded" placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} required />
<input className="border p-2 rounded" placeholder="tags (comma,separated)" value={tags} onChange={e=>setTags(e.target.value)} />
<button className="bg-blue-600 text-white px-4 py-2 rounded-xl">Save</button>
</form>
);
}