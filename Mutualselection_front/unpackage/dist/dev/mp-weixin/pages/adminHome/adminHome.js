"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pairs: [
        { student: "张三", teacher: "李老师" },
        { student: "李四", teacher: "王老师" }
      ]
    };
  },
  methods: {
    assignGroups() {
      common_vendor.index.showToast({ title: "组已分配", icon: "success" });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pairs, (pair, k0, i0) => {
      return {
        a: common_vendor.t(pair.student),
        b: common_vendor.t(pair.teacher),
        c: pair.student
      };
    }),
    b: common_vendor.o((...args) => $options.assignGroups && $options.assignGroups(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ba89ca55"]]);
wx.createPage(MiniProgramPage);
