import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/sequelize';
import Post from './posts';
import User from './user';

interface LikeAttributes {
    id: number;
    post_id: number;
    user_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface LikeCreationAttributes extends Optional<LikeAttributes, 'id'> {}

class Like extends Model<LikeAttributes, LikeCreationAttributes> implements LikeAttributes {
    public id!: number;
    public post_id!: number;
    public user_id!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Like.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    tableName: 'likes',
});

Like.belongsTo(Post, { foreignKey: 'post_id' });
Post.hasMany(Like, { foreignKey: 'post_id' });

Like.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Like, { foreignKey: 'user_id' });

export default Like;
