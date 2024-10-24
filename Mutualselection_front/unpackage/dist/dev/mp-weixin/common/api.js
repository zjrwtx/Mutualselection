"use strict";
const common_vendor = require("./vendor.js");
const BASE_URL = "http://localhost:3000/api";
const login = (data) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: `${BASE_URL}/auth/login`,
      method: "POST",
      data,
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};
const register = (data) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: `${BASE_URL}/auth/register`,
      // 假设后端注册接口为 /auth/register
      method: "POST",
      data,
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};
exports.login = login;
exports.register = register;
