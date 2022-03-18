import request from "./request";
import mock from "./mock";

// 三级联动接口
export const reqGetCategoryList = () => {
  return request({
    url: "/product/getBaseCategoryList",
    method: "get"
  });
};

export const reqGetBannerList = () => {
  return mock({
    url: "/banner",
    method: "get"
  });
};
