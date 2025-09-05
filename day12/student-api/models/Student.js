// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  course: String,
  email: { type: String, unique: true }
});

module.exports = mongoose.model('Student', studentSchema);