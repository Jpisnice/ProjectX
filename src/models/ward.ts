import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/sequelize';
import Admin from './admin';
import User from './user'; // Import the User model

interface WardAttributes {
    id: number;
    name: string;
    description?: string;
    address?: string;
    admin_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface WardCreationAttributes extends Optional<WardAttributes, 'id'> {}

class Ward extends Model<WardAttributes, WardCreationAttributes> implements WardAttributes {
    public id!: number;
    public name!: string;
    public description?: string;
    public address?: string;
    public admin_id!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Ward.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    address: {
        type: DataTypes.TEXT
    },
    admin_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Admin,
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'wards'
});

// Associations
Ward.belongsTo(Admin, { foreignKey: 'admin_id' });
Admin.hasMany(Ward, { foreignKey: 'admin_id' });

// New associations with User and Admin
Ward.hasMany(User, { foreignKey: 'ward_id', as: 'users' }); // Users associated with Ward
Ward.hasMany(Admin, { foreignKey: 'ward_id', as: 'admins' }); // Admins associated with Ward

export default Ward;
