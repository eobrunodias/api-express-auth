import { sequelize } from "../database";
import { DataTypes, Model } from "sequelize";

interface UserInstance extends Model {
  id: number;
  name: string;
  email: string;
  password: string;
}

const User = sequelize.define<UserInstance>(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rule: {
      type: DataTypes.ENUM("admin", "user"),
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: true,
  }
);

export { User };
