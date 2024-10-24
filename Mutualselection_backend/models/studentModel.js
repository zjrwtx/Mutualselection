const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false
  },
  selectedTeacherId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = Student;
