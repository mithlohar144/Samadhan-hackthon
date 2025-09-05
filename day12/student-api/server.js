// server.js
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/students', studentRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});