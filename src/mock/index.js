import Mock from "mockjs";
import banner from "./banner.json";
import floor from "./floor.json";

// 请求地址, 请求参数
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
