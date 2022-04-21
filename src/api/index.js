import request from "./request";
import mock from "./mock";

// 三级联动接口
export const reqGetCategoryList = () => {
  return request("/product/getBaseCategoryList", {
    method: "get"
  });
};

// 获取首页轮播图
export const reqGetBannerList = () => {
  return mock("/banner", {
    method: "get"
  });
};

// 家用电器/手机通讯轮播图
export const reqGetFloorList = () => {
  return mock("/floor", {
    method: "get"
  });
};

// 搜索
export const reqGetSearchInfo = (params) => {
  return request("/list", {
    method: "post",
    data: params
  });
};

// 详情
export const reqGetDetailInfo = (skuId) => {
  return request(`/item/${skuId}`, {
    method: "get"
  });
};

// 添加/更新购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return request(`/cart/addToCart/${skuId}/${skuNum}`, {
    method: "post"
  });
};
