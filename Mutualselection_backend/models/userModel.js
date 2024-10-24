const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// 用户模型（包括学生、老师、管理员）
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'student', 'teacher'),
    allowNull: false
  }
});

module.exports = User;
