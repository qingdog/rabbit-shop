"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      pictures: [
        { id: "1", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_1.jpg" },
        { id: "2", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_2.jpg" },
        { id: "3", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_3.jpg" },
        { id: "4", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_4.jpg" },
        { id: "5", url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_5.jpg" }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    onPreviewImage(url) {
      common_vendor.index.previewImage({
        urls: this.pictures.map((v) => v.url),
        current: url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pictures, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.onPreviewImage(item.url)),
        b: item.url,
        c: item.id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uni-app\u5C0F\u7A0B\u5E8F\u9879\u76EE\u5B9E\u6218/uni-app-project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
