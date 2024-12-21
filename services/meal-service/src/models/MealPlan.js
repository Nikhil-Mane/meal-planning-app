const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const MealPlan = sequelize.define('MealPlan', {
  userId: { type: DataTypes.STRING, allowNull: false },
  meals: { type: DataTypes.JSON, allowNull: false }, // Array of meal objects
  week: { type: DataTypes.STRING, allowNull: false }, // e.g., "2024-W01"
});

module.exports = MealPlan;
