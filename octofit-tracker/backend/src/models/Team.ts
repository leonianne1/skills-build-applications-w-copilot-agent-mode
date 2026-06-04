import { Schema, model } from 'mongoose';

export interface TeamDocument {
  name: string;
  city: string;
  captain: string;
  memberCount: number;
  weeklyGoalMinutes: number;
}

const teamSchema = new Schema<TeamDocument>(
  {
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    captain: { type: String, required: true },
    memberCount: { type: Number, required: true },
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Team = model<TeamDocument>('Team', teamSchema, 'teams');