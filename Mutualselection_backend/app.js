const express = require('express');
const app = express();
const sequelize = require('./config/db');  // 引入 Sequelize 实例
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());

// 注册路由
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/admin', adminRoutes);

// 同步数据库表（根据模型自动创建表）
sequelize.sync({ alter: true })  // 使用 { alter: true } 可以在模型改变时同步表结构
  .then(() => {
    console.log('所有数据表同步成功');
  })
  .catch((err) => {
    console.error('数据表同步失败:', err);
  });

// 启动服务
app.listen(3000, () => {
  console.log('服务器启动，监听端口 3000');
});
