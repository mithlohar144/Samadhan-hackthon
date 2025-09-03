import { Router } from 'express';
import pool from '../db';

const router = Router();

router.get('/', async (_, res) => {
  const result = await pool.query('SELECT * FROM students');
  res.json(result.rows);
});

router.post('/', async (req, res) => {
  const { name, email, age } = req.body;
  const result = await pool.query(
    'INSERT INTO students (name, email, age) VALUES ($1, $2, $3) RETURNING *',
    [name, email, age]
  );
  res.json(result.rows[0]);
});

router.put('/:id', async (req, res) => {
  const { name, email, age } = req.body;
  const { id } = req.params;
  const result = await pool.query(
    'UPDATE students SET name=$1, email=$2, age=$3 WHERE id=$4 RETURNING *',
    [name, email, age, id]
  );
  res.json(result.rows[0]);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM students WHERE id=$1', [id]);
  res.sendStatus(204);
});

export default router;