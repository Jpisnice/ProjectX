"use strict";
const sequelize = require('./sequelize'); // Adjusted path
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();
