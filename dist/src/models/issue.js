"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../lib/sequelize"));
const ward_1 = __importDefault(require("./ward"));
class Issue extends sequelize_1.Model {
    id;
    title;
    description;
    location;
    resolved;
    ward_id;
    createdAt;
    updatedAt;
}
Issue.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    location: {
        type: sequelize_1.DataTypes.STRING
    },
    resolved: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    ward_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: ward_1.default,
            key: 'id'
        }
    }
}, {
    sequelize: sequelize_2.default,
    tableName: 'issues'
});
Issue.belongsTo(ward_1.default, { foreignKey: 'ward_id' });
ward_1.default.hasMany(Issue, { foreignKey: 'ward_id' });
exports.default = Issue;
