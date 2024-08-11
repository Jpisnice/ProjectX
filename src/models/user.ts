import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/sequelize';
import Ward from './ward';
import Post from './posts';
import Comment from './comment';
import Like from './like';

interface UserAttributes {
    id: number;
    username: string;
    password_hash: string;
    email: string;
    address?: string;
    profile_picture?: string;
    role: 'User';
    ward_id?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'address' | 'profile_picture' | 'ward_id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public password_hash!: string;
    public email!: string;
    public address?: string;
    public profile_picture?: string;
    public role!: 'User';
    public ward_id?: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    address: {
        type: DataTypes.TEXT
    },
    profile_picture: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM('User'),
        allowNull: false,
        defaultValue: 'User'
    },
    ward_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Ward,
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'users'
});

// Define associations
User.belongsTo(Ward, { foreignKey: 'ward_id' });
Ward.hasMany(User, { foreignKey: 'ward_id' });

User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Like, { foreignKey: 'user_id' });
Like.belongsTo(User, { foreignKey: 'user_id' });

export default User;
