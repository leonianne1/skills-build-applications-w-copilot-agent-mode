import mongoose from 'mongoose';

const defaultMongoUri = 'mongodb://localhost:27017/octofit_db';

export const mongoUri = process.env.MONGODB_URI ?? defaultMongoUri;

export async function connectToDatabase(): Promise<void> {
  await mongoose.connect(mongoUri);
}
