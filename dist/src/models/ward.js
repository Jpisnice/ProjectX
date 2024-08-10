"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../lib/sequelize"));
const admin_1 = __importDefault(require("./admin"));
class Ward extends sequelize_1.Model {
    id;
    name;
    description;
    address;
    admin_id;
    createdAt;
    updatedAt;
}
Ward.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    address: {
        type: sequelize_1.DataTypes.TEXT
    },
    admin_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: admin_1.default,
            key: 'id'
        }
    }
}, {
    sequelize: sequelize_2.default,
    tableName: 'wards'
});
Ward.belongsTo(admin_1.default, { foreignKey: 'admin_id' });
admin_1.default.hasMany(Ward, { foreignKey: 'admin_id' });
exports.default = Ward;
