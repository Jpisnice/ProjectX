"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../lib/sequelize"));
const posts_1 = __importDefault(require("./posts"));
const user_1 = __importDefault(require("./user"));
class Like extends sequelize_1.Model {
    id;
    post_id;
    user_id;
    createdAt;
    updatedAt;
}
Like.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    sequelize: sequelize_2.default,
    tableName: 'likes',
});
Like.belongsTo(posts_1.default, { foreignKey: 'post_id' });
posts_1.default.hasMany(Like, { foreignKey: 'post_id' });
Like.belongsTo(user_1.default, { foreignKey: 'user_id' });
user_1.default.hasMany(Like, { foreignKey: 'user_id' });
exports.default = Like;
