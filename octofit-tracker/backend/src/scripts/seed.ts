import mongoose from 'mongoose';
import { Activity } from '../models/Activity';
import { Leaderboard } from '../models/Leaderboard';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const mongoUri = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit_db';

const seedDatabase = async () => {
  console.log('Seed the octofit_db database with test data');

  await mongoose.connect(mongoUri);

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  await User.insertMany([
    {
      username: 'maya-rivera',
      email: 'maya.rivera@example.com',
      displayName: 'Maya Rivera',
      age: 31,
      fitnessGoal: 'Improve endurance for a spring half marathon',
    },
    {
      username: 'devon-chen',
      email: 'devon.chen@example.com',
      displayName: 'Devon Chen',
      age: 27,
      fitnessGoal: 'Build functional strength and mobility',
    },
    {
      username: 'aisha-patel',
      email: 'aisha.patel@example.com',
      displayName: 'Aisha Patel',
      age: 34,
      fitnessGoal: 'Maintain consistent weekly activity',
    },
  ]);

  await Team.insertMany([
    {
      name: 'Trail Blazers',
      city: 'Seattle',
      captain: 'maya-rivera',
      memberCount: 8,
      weeklyGoalMinutes: 1800,
    },
    {
      name: 'Core Crew',
      city: 'Austin',
      captain: 'devon-chen',
      memberCount: 6,
      weeklyGoalMinutes: 1440,
    },
  ]);

  await Activity.insertMany([
    {
      username: 'maya-rivera',
      activityType: 'Outdoor run',
      durationMinutes: 48,
      caloriesBurned: 460,
      activityDate: new Date('2026-06-01T07:30:00Z'),
    },
    {
      username: 'devon-chen',
      activityType: 'Strength circuit',
      durationMinutes: 42,
      caloriesBurned: 390,
      activityDate: new Date('2026-06-02T18:15:00Z'),
    },
    {
      username: 'aisha-patel',
      activityType: 'Yoga flow',
      durationMinutes: 35,
      caloriesBurned: 180,
      activityDate: new Date('2026-06-03T06:45:00Z'),
    },
  ]);

  await Leaderboard.insertMany([
    {
      rank: 1,
      username: 'maya-rivera',
      teamName: 'Trail Blazers',
      points: 1280,
      weeklyMinutes: 225,
    },
    {
      rank: 2,
      username: 'devon-chen',
      teamName: 'Core Crew',
      points: 1175,
      weeklyMinutes: 205,
    },
    {
      rank: 3,
      username: 'aisha-patel',
      teamName: 'Trail Blazers',
      points: 1030,
      weeklyMinutes: 190,
    },
  ]);

  await Workout.insertMany([
    {
      name: 'Tempo Builder Run',
      focusArea: 'Cardio',
      difficulty: 'Intermediate',
      durationMinutes: 45,
      recommendedForGoal: 'Improve endurance for a spring half marathon',
    },
    {
      name: 'Full-Body Kettlebell Ladder',
      focusArea: 'Strength',
      difficulty: 'Intermediate',
      durationMinutes: 38,
      recommendedForGoal: 'Build functional strength and mobility',
    },
    {
      name: 'Low-Impact Mobility Reset',
      focusArea: 'Mobility',
      difficulty: 'Beginner',
      durationMinutes: 25,
      recommendedForGoal: 'Maintain consistent weekly activity',
    },
  ]);

  console.log('Inserted sample users, teams, activities, leaderboard entries, and workouts.');
};

seedDatabase()
  .catch((error: unknown) => {
    console.error('Failed to seed octofit_db:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });