import express from 'express';
import { connectDatabase } from './database';
import { Activity } from './models/Activity';
import { Leaderboard } from './models/Leaderboard';
import { Team } from './models/Team';
import { User } from './models/User';
import { Workout } from './models/Workout';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-${port}.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/users/', async (_req, res) => {
  const users = await User.find().sort({ username: 1 });
  res.status(200).json({ users });
});

app.get('/api/teams/', async (_req, res) => {
  const teams = await Team.find().sort({ name: 1 });
  res.status(200).json({ teams });
});

app.get('/api/activities/', async (_req, res) => {
  const activities = await Activity.find().sort({ activityDate: -1 });
  res.status(200).json({ activities });
});

app.get('/api/leaderboard/', async (_req, res) => {
  const leaderboard = await Leaderboard.find().sort({ rank: 1 });
  res.status(200).json({ leaderboard });
});

app.get('/api/workouts/', async (_req, res) => {
  const workouts = await Workout.find().sort({ name: 1 });
  res.status(200).json({ workouts });
});

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`OctoFit backend running on ${baseUrl}`);
    });
  })
  .catch((error: unknown) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  });