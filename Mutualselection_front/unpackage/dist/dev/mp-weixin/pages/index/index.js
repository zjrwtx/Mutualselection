"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        const response = await common_api.login({
          username: this.username,
          password: this.password
        });
        common_vendor.index.setStorageSync("token", response.token);
        common_vendor.index.redirectTo({
          url: "/pages/studentHome/studentHome"
        });
      } catch (error) {
        common_vendor.index.showToast({ title: "登录失败", icon: "none" });
      }
    },
    toRegister() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    },
    toadmin() {
      common_vendor.index.navigateTo({
        url: "/pages/adminHome/adminHome"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: common_vendor.o((...args) => $options.login && $options.login(...args)),
    f: common_vendor.o((...args) => $options.toRegister && $options.toRegister(...args)),
    g: common_vendor.o((...args) => $options.toadmin && $options.toadmin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
