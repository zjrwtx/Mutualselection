const BASE_URL = 'http://localhost:3000/api';

// 登录接口
export const login = (data) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}/auth/login`,
      method: 'POST',
      data,
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};

// 注册接口
export const register = (data) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}/auth/register`, // 假设后端注册接口为 /auth/register
      method: 'POST',
      data,
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};

// 获取学生列表（管理员使用）
export const getStudents = () => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}/admin/students`, // 假设管理员获取学生列表接口
      method: 'GET',
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};

// 获取老师列表（学生选择老师使用）
export const getTeachers = () => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}/students/teachers`, // 假设学生获取老师列表接口
      method: 'GET',
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};

// 确认学生选择的老师（学生使用）
export const confirmTeacherSelection = (studentId, teacherId) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}/students/confirm`, // 假设学生确认老师选择的接口
      method: 'POST',
      data: { studentId, teacherId },
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};

// 老师确认学生选择（老师使用）
export const confirmStudentSelection = (teacherId, studentId) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}/teachers/confirm`, // 假设老师确认学生选择的接口
      method: 'POST',
      data: { teacherId, studentId },
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};

// 管理员自动分配小组
export const assignGroups = () => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASE_URL}/admin/assign-groups`, // 假设管理员自动分配小组接口
      method: 'POST',
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};
