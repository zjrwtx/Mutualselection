<template>
  <view class="login-container">
    <view class="login-box">
      <view class="title">用户登录</view>
      <input class="input-field" v-model="username" placeholder="请输入用户名" />
      <input class="input-field" v-model="password" type="password" placeholder="请输入密码" />
      <button class="login-button" @click="login">登录</button>
      <view class="register-link" @click="toRegister">没有账号？去注册</view>
	  <view class="register-link" @click="toadmin">admin</view>
	</view>
  </view>
</template>

<script>
import { login } from '@/common/api';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await login({
          username: this.username,
          password: this.password
        });
        uni.setStorageSync('token', response.token);
        uni.redirectTo({
          url: '/pages/studentHome/studentHome'
        });
      } catch (error) {
        uni.showToast({ title: '登录失败', icon: 'none' });
      }
    },
    toRegister() {
      uni.navigateTo({
        url: '/pages/register/register'
      });
    },
	toadmin() {
	  uni.navigateTo({
	    url: '/pages/adminHome/adminHome'
	  });
	}
  }
};
</script>

<style scoped>
/* 页面整体布局 */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6D5BBA, #8E8CD8);
}

/* 登录框样式 */
.login-box {
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* 标题样式 */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

/* 输入框样式 */
.input-field {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
}

/* 登录按钮样式 */
.login-button {
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

.login-button:hover {
  background: linear-gradient(135deg, #8E8CD8, #6D5BBA);
}

/* 注册链接样式 */
.register-link {
  margin-top: 15px;
  font-size: 14px;
  color: #6D5BBA;
  cursor: pointer;
  text-decoration: underline;
}
</style>
