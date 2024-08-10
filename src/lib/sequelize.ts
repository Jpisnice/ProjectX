// src/lib/sequelize.ts
import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config(); // Load environment variables

const sequelize = new Sequelize(
  process.env.DATABASE_NAME!,
  process.env.DATABASE_USER!,
  process.env.DATABASE_PASSWORD!,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    logging: process.env.SEQUELIZE_LOGGING === 'true' // Optional: Use logging setting from .env
  }
);

export default sequelize;