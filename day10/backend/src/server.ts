import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/students';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});