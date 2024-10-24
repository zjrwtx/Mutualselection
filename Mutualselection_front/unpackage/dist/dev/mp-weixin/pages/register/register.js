"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      role: "student"
      // 默认选中学生
    };
  },
  methods: {
    async register() {
      try {
        const response = await common_api.register({
          username: this.username,
          password: this.password,
          role: this.role
        });
        common_vendor.index.showToast({ title: "注册成功", icon: "success" });
        common_vendor.index.redirectTo({
          url: "/pages/login"
        });
      } catch (error) {
        common_vendor.index.showToast({ title: "注册失败", icon: "none" });
      }
    },
    toLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/login"
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
    e: common_vendor.o(($event) => $data.role = "student"),
    f: $data.role === "student" ? 1 : "",
    g: common_vendor.o(($event) => $data.role = "teacher"),
    h: $data.role === "teacher" ? 1 : "",
    i: common_vendor.o(($event) => $data.role = "admin"),
    j: $data.role === "admin" ? 1 : "",
    k: common_vendor.o((...args) => $options.register && $options.register(...args)),
    l: common_vendor.o((...args) => $options.toLogin && $options.toLogin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bac4a35d"]]);
wx.createPage(MiniProgramPage);
