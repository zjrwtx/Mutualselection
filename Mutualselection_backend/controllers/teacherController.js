const Student = require('../models/studentModel');

// 确认学生选择
exports.confirmStudentSelection = async (req, res) => {
  const { teacherId, studentId } = req.body;

  try {
    const student = await Student.findByPk(studentId);
    if (student.selectedTeacherId !== teacherId) {
      return res.status(400).json({ error: '学生未选择该老师' });
    }
    // 确认选择逻辑，例如更新数据库状态
    res.status(200).json({ message: '已确认选择' });
  } catch (err) {
    res.status(500).json({ error: '确认失败' });
  }
};
