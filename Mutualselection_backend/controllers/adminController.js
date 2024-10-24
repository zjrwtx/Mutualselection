const Student = require('../models/studentModel');

// 自动分配小组
exports.assignGroups = async (req, res) => {
  try {
    // 自动分组的逻辑（例如根据老师和学生的数量进行分配）
    res.status(200).json({ message: '组分配成功' });
  } catch (err) {
    res.status(500).json({ error: '组分配失败' });
  }
};
