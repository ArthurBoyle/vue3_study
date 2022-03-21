import { reqGetCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";

export default {
  namespaced: true,
  state: {
    categoryList: [],
    bannerList: [],
    floorList: []
  },
  actions: {
    async getCategoryList({ commit }) {
      const { code, data } = await reqGetCategoryList();
      if (code === 200) {
        commit("setCategoryList", data.slice(0, 16));
      }
    },
    async getBannerList({ commit }) {
      const { code, data } = await reqGetBannerList();
      if (code === 200) {
        commit("setBannerList", data);
      }
    },
    async getFloorList({ commit }) {
      const { code, data } = await reqGetFloorList();
      if (code === 200) {
        commit("setFloorList", data);
      }
    }
  },
  mutations: {
    setCategoryList(state, payload) {
      state.categoryList = payload;
    },
    setBannerList(state, payload) {
      state.bannerList = payload;
    },
    setFloorList(state, payload) {
      state.floorList = payload;
    }
  }
};
