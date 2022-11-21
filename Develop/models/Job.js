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
    employer_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employer_website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emp_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job_description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    job_apply_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'profile',
        key: 'id',
      },
    },
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
