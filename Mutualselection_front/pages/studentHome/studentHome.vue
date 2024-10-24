<template>
  <view class="home-container">
    <view class="header">学生首页</view>
    <view class="info-box">
      <text class="info-title">欢迎, {{ studentName }}</text>
      <view class="info-details">
        <text>班级: {{ studentClass }}</text>
        <text>当前选择的老师: {{ selectedTeacher || '未选择' }}</text>
      </view>
    </view>

    <view class="teacher-selection">
      <text class="section-title">选择指导老师</text>
      <view class="teacher-list">
        <view class="teacher-item" v-for="teacher in teachers" :key="teacher.id" @click="chooseTeacher(teacher)">
          <text>{{ teacher.name }} ({{ teacher.department }})</text>
        </view>
      </view>
    </view>

    <button class="confirm-button" @click="confirmSelection">确认选择</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      studentName: '张三',
      studentClass: '计算机101班',
      selectedTeacher: null,
      teachers: [
        { id: 1, name: '李老师', department: '计算机学院' },
        { id: 2, name: '王老师', department: '信息工程学院' }
      ]
    };
  },
  methods: {
    chooseTeacher(teacher) {
      this.selectedTeacher = teacher.name;
    },
    confirmSelection() {
      if (!this.selectedTeacher) {
        uni.showToast({ title: '请选择老师', icon: 'none' });
      } else {
        uni.showToast({ title: '选择已确认', icon: 'success' });
        // 进行后端确认操作
      }
    }
  }
};
</script>

<style scoped>
.home-container {
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.header {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #6D5BBA;
}

.info-box {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.info-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.info-details {
  font-size: 14px;
  color: #666;
}

.teacher-selection {
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.teacher-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.teacher-item {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.confirm-button {
  width: 100%;
  padding: 12px;
  background-color: #6D5BBA;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.confirm-button:hover {
  background-color: #8E8CD8;
}
</style>
