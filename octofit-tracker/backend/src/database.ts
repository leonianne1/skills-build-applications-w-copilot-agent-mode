import mongoose from 'mongoose';

export const mongoUri = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit_db';

export const connectDatabase = async () => {
  await mongoose.connect(mongoUri);
};

export const disconnectDatabase = async () => {
  await mongoose.disconnect();
};