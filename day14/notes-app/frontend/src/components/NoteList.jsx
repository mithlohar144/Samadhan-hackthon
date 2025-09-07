import NoteItem from './NoteItem';


export default function NoteList({ notes, onUpdate, onDelete, onTogglePin }) {
if (!notes.length) return <div className="text-center text-gray-500">No notes yet</div>;
return (
<div className="grid gap-3">
{notes.map(n => (
<NoteItem key={n._id} note={n} onUpdate={onUpdate} onDelete={onDelete} onTogglePin={onTogglePin} />
))}
</div>
);
}