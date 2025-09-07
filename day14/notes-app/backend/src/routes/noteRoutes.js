import { Router } from 'express';
res.status(201).json(note);
} catch (e) {
res.status(500).json({ message: e.message });
}
});


// Read (list + search + pinned-first)
router.get('/', async (req, res) => {
try {
const { q } = req.query; // simple search
const filter = q
? {
$or: [
{ title: { $regex: q, $options: 'i' } },
{ content: { $regex: q, $options: 'i' } },
{ tags: { $in: [new RegExp(q, 'i')] } }
]
}
: {};


const notes = await Note.find(filter).sort({ pinned: -1, updatedAt: -1 });
res.json(notes);
} catch (e) {
res.status(500).json({ message: e.message });
}
});


// Read by id
router.get('/:id', async (req, res) => {
try {
const note = await Note.findById(req.params.id);
if (!note) return res.status(404).json({ message: 'Not found' });
res.json(note);
} catch (e) {
res.status(400).json({ message: 'Invalid id' });
}
});


// Update
router.put('/:id', async (req, res) => {
try {
const { title, content, tags, pinned } = req.body;
const note = await Note.findByIdAndUpdate(
req.params.id,
{ title, content, tags, pinned },
{ new: true, runValidators: true }
);
if (!note) return res.status(404).json({ message: 'Not found' });
res.json(note);
} catch (e) {
res.status(400).json({ message: e.message });
}
});


// Delete
router.delete('/:id', async (req, res) => {
try {
const note = await Note.findByIdAndDelete(req.params.id);
if (!note) return res.status(404).json({ message: 'Not found' });
res.json({ message: 'Deleted', id: req.params.id });
} catch (e) {
res.status(400).json({ message: e.message });
}
});


export default router;