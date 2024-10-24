<template>
  <view class="register-container">
    <view class="register-box">
      <view class="title">用户注册</view>
      <input class="input-field" v-model="username" placeholder="请输入用户名" />
      <input class="input-field" v-model="password" type="password" placeholder="请输入密码" />
      <view class="role-select">
        <view class="role-option" @click="role = 'student'" :class="{ active: role === 'student' }">学生</view>
        <view class="role-option" @click="role = 'teacher'" :class="{ active: role === 'teacher' }">老师</view>
        <view class="role-option" @click="role = 'admin'" :class="{ active: role === 'admin' }">管理员</view>
      </view>
      <button class="register-button" @click="register">注册</button>
      <view class="login-link" @click="toLogin">已有账号？去登录</view>
    </view>
  </view>
</template>

<script>
import { register } from '@/common/api';

export default {
  data() {
    return {
      username: '',
      password: '',
      role: 'student' // 默认选中学生
    };
  },
  methods: {
    async register() {
      try {
        const response = await register({
          username: this.username,
          password: this.password,
          role: this.role
        });
        uni.showToast({ title: '注册成功', icon: 'success' });
        uni.redirectTo({
          url: '/pages/login'
        });
      } catch (error) {
        uni.showToast({ title: '注册失败', icon: 'none' });
      }
    },
    toLogin() {
      uni.navigateTo({
        url: '/pages/login'
      });
    }
  }
};
</script>

<style scoped>
/* 页面布局与 login.vue 类似 */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6D5BBA, #8E8CD8);
}

.register-box {
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.input-field {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
}

.role-select {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.role-option {
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.role-option.active {
  background-color: #6D5BBA;
  color: white;
}

.register-button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #6D5BBA, #8E8CD8);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.register-button:hover {
  background: linear-gradient(135deg, #8E8CD8, #6D5BBA);
}

.login-link {
  margin-top: 15px;
  font-size: 14px;
  color: #6D5BBA;
  cursor: pointer;
  text-decoration: underline;
}
</style>
