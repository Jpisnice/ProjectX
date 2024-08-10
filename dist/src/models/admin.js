"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../lib/sequelize"));
const user_1 = __importDefault(require("./user"));
class Admin extends sequelize_1.Model {
    id;
    user_id;
    role;
    ward_id;
    sarpanch_id;
    mla_id;
    createdAt;
    updatedAt;
}
Admin.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: user_1.default,
            key: 'id'
        }
    },
    role: {
        type: sequelize_1.DataTypes.ENUM('Panch', 'Sarpanch', 'MLA'),
        allowNull: false
    },
    ward_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    sarpanch_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    mla_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: sequelize_2.default,
    tableName: 'admins'
});
Admin.belongsTo(user_1.default, { foreignKey: 'user_id' });
user_1.default.hasOne(Admin, { foreignKey: 'user_id' });
exports.default = Admin;
