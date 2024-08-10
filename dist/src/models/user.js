"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../lib/sequelize"));
class User extends sequelize_1.Model {
    id;
    username;
    password_hash;
    email;
    address;
    profile_picture;
    role;
    createdAt;
    updatedAt;
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password_hash: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
    },
    profile_picture: {
        type: sequelize_1.DataTypes.STRING,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM("User"),
        defaultValue: "User",
    },
}, {
    sequelize: sequelize_2.default,
    tableName: "users",
});
exports.default = User;
