import express from 'express';
import { connectToDatabase } from './config/database';

const app = express();
const port = 8000;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`OctoFit backend running on http://localhost:${port}`);
    });
  })
  .catch((error: unknown) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  });