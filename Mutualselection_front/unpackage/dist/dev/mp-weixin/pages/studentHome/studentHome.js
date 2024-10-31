"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      studentName: "张三",
      studentClass: "计算机101班",
      selectedTeacher: null,
      teachers: [
        { id: 1, name: "李老师", department: "计算机学院" },
        { id: 2, name: "王老师", department: "信息工程学院" }
      ]
    };
  },
  methods: {
    chooseTeacher(teacher) {
      this.selectedTeacher = teacher.name;
    },
    confirmSelection() {
      if (!this.selectedTeacher) {
        common_vendor.index.showToast({ title: "请选择老师", icon: "none" });
      } else {
        common_vendor.index.showToast({ title: "选择已确认", icon: "success" });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.studentName),
    b: common_vendor.t($data.studentClass),
    c: common_vendor.t($data.selectedTeacher || "未选择"),
    d: common_vendor.f($data.teachers, (teacher, k0, i0) => {
      return {
        a: common_vendor.t(teacher.name),
        b: common_vendor.t(teacher.department),
        c: teacher.id,
        d: common_vendor.o(($event) => $options.chooseTeacher(teacher), teacher.id)
      };
    }),
    e: common_vendor.o((...args) => $options.confirmSelection && $options.confirmSelection(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19caf68d"]]);
wx.createPage(MiniProgramPage);
