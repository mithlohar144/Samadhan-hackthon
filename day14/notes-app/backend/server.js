import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDB } from './src/db.js';
import noteRoutes from './src/routes/noteRoutes.js';


const app = express();


app.use(helmet());
app.use(cors({ origin: '*'}));
app.use(express.json());
app.use(morgan('dev'));


app.get('/', (_req, res) => res.send('Notes API is running'));
app.use('/api/notes', noteRoutes);


const PORT = process.env.PORT || 5000;


connectDB(process.env.MONGO_URI)
.then(() => {
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
})
.catch((e) => {
console.error('Mongo connect error:', e);
process.exit(1);
});