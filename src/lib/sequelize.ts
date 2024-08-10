import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'mysql', // or 'postgres', 'sqlite', 'mariadb'
    logging: false, // Set to console.log to see SQL queries
});

export default sequelize;
