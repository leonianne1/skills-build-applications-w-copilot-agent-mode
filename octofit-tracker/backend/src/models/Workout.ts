import { Schema, model } from 'mongoose';

export interface WorkoutDocument {
  name: string;
  focusArea: string;
  difficulty: string;
  durationMinutes: number;
  recommendedForGoal: string;
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    name: { type: String, required: true, unique: true },
    focusArea: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    recommendedForGoal: { type: String, required: true },
  },
  { timestamps: true }
);

export const Workout = model<WorkoutDocument>('Workout', workoutSchema, 'workouts');