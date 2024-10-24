const Student = require('../models/studentModel');
const Teacher = require('../models/teacherModel');

// 获取老师列表
exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.status(200).json(teachers);
  } catch (err) {
    res.status(500).json({ error: '获取老师列表失败' });
  }
};

// 确认选择老师
exports.confirmTeacherSelection = async (req, res) => {
  const { studentId, teacherId } = req.body;
  
  try {
    const student = await Student.findByPk(studentId);
    student.selectedTeacherId = teacherId;
    await student.save();
    res.status(200).json({ message: '选择成功' });
  } catch (err) {
    res.status(500).json({ error: '选择失败' });
  }
};
