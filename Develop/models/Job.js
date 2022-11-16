const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Job extends Model {}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      job_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
      employment_typel: {
        type: DataTypes.STRING,
      allowNull: false
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job',
  },
);

module.exports = Job;
