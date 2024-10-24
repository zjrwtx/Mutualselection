const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: '访问拒绝' });

  try {
    const verified = jwt.verify(token, 'secret');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: '无效的令牌' });
  }
};
