const { Sequelize } = require('sequelize');

// Initialize Sequelize with your PostgreSQL connection details
const sequelize = new Sequelize('meal_planning', 'user', 'password', {
  host: 'postgres',
  dialect: 'postgres',
});

module.exports = sequelize;
