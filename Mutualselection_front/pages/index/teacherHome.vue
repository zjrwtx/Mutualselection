<template>
  <view class="home-container">
    <view class="header">老师首页</view>
    <view class="info-box">
      <text class="info-title">欢迎, {{ teacherName }}</text>
      <view class="info-details">
        <text>部门: {{ department }}</text>
      </view>
    </view>

    <view class="student-selection">
      <text class="section-title">学生选择情况</text>
      <view class="student-list">
        <view class="student-item" v-for="student in students" :key="student.id">
          <text>{{ student.name }} ({{ student.class }})</text>
          <button class="confirm-button" @click="confirmStudent(student)">确认</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      teacherName: '李老师',
      department: '计算机学院',
      students: [
        { id: 1, name: '张三', class: '计算机101班' },
        { id: 2, name: '李四', class: '计算机102班' }
      ]
    };
  },
  methods: {
    confirmStudent(student) {
      uni.showToast({ title: `已确认${student.name}`, icon: 'success' });
      // 后端确认逻辑
    }
  }
};
</script>

<style scoped>
/* 类似 studentHome.vue 的样式 */
</style>
