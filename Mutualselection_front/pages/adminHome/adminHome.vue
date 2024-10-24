<template>
  <view class="home-container">
    <view class="header">管理员首页</view>
    <view class="info-box">
      <text class="info-title">学生-老师配对情况</text>
      <view class="info-details" v-for="pair in pairs" :key="pair.student">
        <text>{{ pair.student }} - {{ pair.teacher }}</text>
      </view>
    </view>

    <button class="assign-button" @click="assignGroups">自动分配组</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pairs: [
        { student: '张三', teacher: '李老师' },
        { student: '李四', teacher: '王老师' }
      ]
    };
  },
  methods: {
    assignGroups() {
      uni.showToast({ title: '组已分配', icon: 'success' });
      // 组分配逻辑
    }
  }
};
</script>

<style scoped>
/* 与 studentHome.vue 样式相似 */
</style>
