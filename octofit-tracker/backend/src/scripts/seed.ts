import { connectToDatabase } from '../config/database';

async function seedDatabase() {
  console.log('Seed the octofit_db database with test data');

  await connectToDatabase();
  await Promise.resolve();
}

seedDatabase()
  .then(() => process.exit(0))
  .catch((error: unknown) => {
    console.error('Failed to seed database:', error);
    process.exit(1);
  });
