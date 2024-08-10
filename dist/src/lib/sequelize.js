"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/sequelize.ts
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // Load environment variables
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: Number(process.env.DB_PORT),
});
exports.default = sequelize;
