const { Sequelize } = require('sequelize');

// 创建 Sequelize 实例
const sequelize = new Sequelize('mutual_selection', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// 测试数据库连接
sequelize.authenticate()
  .then(() => console.log('数据库连接成功'))
  .catch((err) => console.error('数据库连接失败:', err));

module.exports = sequelize;
