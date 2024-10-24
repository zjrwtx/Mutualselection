const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 用户注册
exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, role });
    res.status(201).json({ message: '注册成功', user });
  } catch (err) {
    res.status(500).json({ error: '注册失败' });
  }
};

// 用户登录
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).json({ error: '用户不存在' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: '密码错误' });

    const token = jwt.sign({ id: user.id, role: user.role }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ message: '登录成功', token });
  } catch (err) {
    res.status(500).json({ error: '登录失败' });
  }
};
