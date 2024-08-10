"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../lib/sequelize"));
const issue_1 = __importDefault(require("./issue"));
class Post extends sequelize_1.Model {
    id;
    content;
    image;
    issue_id;
    createdAt;
    updatedAt;
}
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING
    },
    issue_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: issue_1.default,
            key: 'id'
        }
    }
}, {
    sequelize: sequelize_2.default,
    tableName: 'posts'
});
Post.belongsTo(issue_1.default, { foreignKey: 'issue_id' });
issue_1.default.hasMany(Post, { foreignKey: 'issue_id' });
exports.default = Post;
