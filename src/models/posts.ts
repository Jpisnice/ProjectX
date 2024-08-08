import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/sequelize';
import Issue from './issue';

interface PostAttributes {
    id: number;
    content: string;
    image?: string;
    issue_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface PostCreationAttributes extends Optional<PostAttributes, 'id'> {}

class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
    public id!: number;
    public content!: string;
    public image?: string;
    public issue_id!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
    issue_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Issue,
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'posts'
});

Post.belongsTo(Issue, { foreignKey: 'issue_id' });
Issue.hasMany(Post, { foreignKey: 'issue_id' });

export default Post;
