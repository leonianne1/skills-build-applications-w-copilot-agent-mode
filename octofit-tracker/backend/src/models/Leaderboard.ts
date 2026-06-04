import { Schema, model } from 'mongoose';

export interface LeaderboardDocument {
  rank: number;
  username: string;
  teamName: string;
  points: number;
  weeklyMinutes: number;
}

const leaderboardSchema = new Schema<LeaderboardDocument>(
  {
    rank: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    teamName: { type: String, required: true },
    points: { type: Number, required: true },
    weeklyMinutes: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Leaderboard = model<LeaderboardDocument>('Leaderboard', leaderboardSchema, 'leaderboard');