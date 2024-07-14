import express from 'express';
import cors from 'cors';
import connectionPool from './src/utils/db.mjs';
import authRouter from './src/routes/auth.route.mjs';
import { protect } from './src/middlewares/protect.middleware.mjs';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use(protect);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/roles', async (req, res) => {
  let results;

  try {
    results = await connectionPool.query(`select * from users`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server could not read assignments because database connection'
    });
  }

  if (!results.rows.length) {
    return res.status(404).json({ message: 'No assignments found' });
  }

  return res.status(200).json({ data: results.rows });
});

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
