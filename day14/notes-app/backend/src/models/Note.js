import mongoose from 'mongoose';


const noteSchema = new mongoose.Schema(
{
title: { type: String, required: true, trim: true },
content: { type: String, required: true },
tags: { type: [String], default: [] },
pinned: { type: Boolean, default: false }
},
{ timestamps: true }
);


export default mongoose.model('Note', noteSchema);
