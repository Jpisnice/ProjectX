import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/sequelize';
import User from './user';

interface AdminAttributes {
    id: number;
    user_id: number;
    role: 'Panch' | 'Sarpanch' | 'MLA';
    ward_id?: number;
    sarpanch_id?: number;
    mla_id?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface AdminCreationAttributes extends Optional<AdminAttributes, 'id'> {}

class Admin extends Model<AdminAttributes, AdminCreationAttributes> implements AdminAttributes {
    public id!: number;
    public user_id!: number;
    public role!: 'Panch' | 'Sarpanch' | 'MLA';
    public ward_id?: number;
    public sarpanch_id?: number;
    public mla_id?: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Admin.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    role: {
        type: DataTypes.ENUM('Panch', 'Sarpanch', 'MLA'),
        allowNull: false
    },
    ward_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    sarpanch_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    mla_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'admins'
});

Admin.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(Admin, { foreignKey: 'user_id' });

export default Admin;
