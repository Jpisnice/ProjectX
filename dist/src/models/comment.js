"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../lib/sequelize"));
const posts_1 = __importDefault(require("./posts"));
const user_1 = __importDefault(require("./user"));
class Comment extends sequelize_1.Model {
    id;
    content;
    post_id;
    user_id;
    createdAt;
    updatedAt;
}
Comment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: posts_1.default,
            key: 'id'
        }
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: user_1.default,
            key: 'id'
        }
    }
}, {
    sequelize: sequelize_2.default,
    tableName: 'comments'
});
Comment.belongsTo(posts_1.default, { foreignKey: 'post_id' });
posts_1.default.hasMany(Comment, { foreignKey: 'post_id' });
Comment.belongsTo(user_1.default, { foreignKey: 'user_id' });
user_1.default.hasMany(Comment, { foreignKey: 'user_id' });
exports.default = Comment;
