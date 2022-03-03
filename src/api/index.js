import request from "./request";

// 三级联动接口
export const getCategoryList = () => {
  return request({
    url: "/product/getBaseCategoryList",
    method: "get"
  });
};
