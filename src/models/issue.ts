import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/sequelize';
import Ward from './ward';

interface IssueAttributes {
    id: number;
    title: string;
    description?: string;
    location?: string;
    resolved: boolean;
    ward_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface IssueCreationAttributes extends Optional<IssueAttributes, 'id'> {}

class Issue extends Model<IssueAttributes, IssueCreationAttributes> implements IssueAttributes {
    public id!: number;
    public title!: string;
    public description?: string;
    public location?: string;
    public resolved!: boolean;
    public ward_id!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Issue.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    location: {
        type: DataTypes.STRING
    },
    resolved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
    tableName: 'issues'
});

Issue.belongsTo(Ward, { foreignKey: 'ward_id' });
Ward.hasMany(Issue, { foreignKey: 'ward_id' });

export default Issue;
