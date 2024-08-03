import { sequelize } from "../database";
import { DataTypes, Model } from "sequelize";

interface TaskInstance extends Model {
  id: number;
  title: string;
  description: string;
  done: boolean;
  init_date: Date;
  end_date: Date;
}

export const Task = sequelize.define<TaskInstance>(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    initDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    underscored: true,
    timestamps: true,
  }
);
