import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../lib/sequelize";
import Ward from "./ward"; // Import the Ward model

interface UserAttributes {
  id: number;
  username: string;
  password_hash: string;
  email: string;
  address?: string;
  profile_picture?: string;
  role: "User";
  ward_id?: number; // New field
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public password_hash!: string;
  public email!: string;
  public address?: string;
  public profile_picture?: string;
  public role!: "User";
  public ward_id?: number; // New field
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
    },
    profile_picture: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM("User"),
      defaultValue: "User",
    },
    ward_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Ward, // Foreign key reference to Ward
        key: "id",
      },
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);

// Associations
User.belongsTo(Ward, { foreignKey: "ward_id", as: "ward" }); // Define association with Ward

export default User;
