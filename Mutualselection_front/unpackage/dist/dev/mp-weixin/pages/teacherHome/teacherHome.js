"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      teacherName: "李老师",
      department: "计算机学院",
      students: [
        { id: 1, name: "张三", class: "计算机101班" },
        { id: 2, name: "李四", class: "计算机102班" }
      ]
    };
  },
  methods: {
    confirmStudent(student) {
      common_vendor.index.showToast({ title: `已确认${student.name}`, icon: "success" });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.teacherName),
    b: common_vendor.t($data.department),
    c: common_vendor.f($data.students, (student, k0, i0) => {
      return {
        a: common_vendor.t(student.name),
        b: common_vendor.t(student.class),
        c: common_vendor.o(($event) => $options.confirmStudent(student), student.id),
        d: student.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b1e0bf25"]]);
wx.createPage(MiniProgramPage);
