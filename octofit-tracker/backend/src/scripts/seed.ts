import mongoose from 'mongoose';

import { connectToDatabase } from '../config/database';

async function seed(): Promise<void> {
  console.log('Seed the octofit_db database with test data');
}

seed()
  .then(async () => {
    await connectToDatabase();
    await mongoose.disconnect();
  })
  .catch((error: unknown) => {
    console.error('Failed to seed data:', error);
    process.exit(1);
  });
