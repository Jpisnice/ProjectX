const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize(
  process.env.DATABASE_NAME!,
  process.env.DATABASE_USER!,
  process.env.DATABASE_PASSWORD!,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

// Test the database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

module.exports = sequelize;