import request from "./request";
import mock from "./mock";

// 三级联动接口
export const reqGetCategoryList = () => {
  return request("/product/getBaseCategoryList", {
    method: "get"
  });
};

export const reqGetBannerList = () => {
  return mock("/banner", {
    method: "get"
  });
};

export const reqGetFloorList = () => {
  return mock("/floor", {
    method: "get"
  });
};

export const reqGetSearchInfo = (params) => {
  return request("/list", {
    method: "post",
    data: params
  });
};
