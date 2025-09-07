import { useState } from 'react';


export default function NoteItem({ note, onUpdate, onDelete, onTogglePin }) {
const [isEditing, setIsEditing] = useState(false);
const [form, setForm] = useState({ title: note.title, content: note.content, tags: note.tags.join(', ') });


function save() {
onUpdate(note._id, { ...note, title: form.title, content: form.content, tags: form.tags.split(',').map(t=>t.trim()).filter(Boolean) });
setIsEditing(false);
}


return (
<div className="bg-white p-4 rounded-2xl shadow grid gap-2">
<div className="flex items-center justify-between">
{isEditing ? (
<input className="border p-2 rounded w-full mr-2" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} />
) : (
<h3 className="text-lg font-semibold">{note.title}</h3>
)}
<button onClick={() => onTogglePin(note)} className="text-sm underline">
{note.pinned ? 'Unpin' : 'Pin'}
</button>
</div>


{isEditing ? (
<textarea className="border p-2 rounded" value={form.content} onChange={e=>setForm({...form, content: e.target.value})} />
) : (
<p className="whitespace-pre-wrap">{note.content}</p>
)}


<div className="text-sm text-gray-600">{note.tags?.map(t=>`#${t}`).join(' ')}</div>


<div className="flex gap-2">
{isEditing ? (
<>
<button onClick={save} className="bg-green-600 text-white px-3 py-1 rounded-xl">Save</button>
<button onClick={()=>setIsEditing(false)} className="px-3 py-1 border rounded-xl">Cancel</button>
</>
) : (
<>
<button onClick={()=>setIsEditing(true)} className="px-3 py-1 border rounded-xl">Edit</button>
<button onClick={()=>onDelete(note._id)} className="bg-red-600 text-white px-3 py-1 rounded-xl">Delete</button>
</>
)}
</div>
</div>
);
}