import { reqGetCategoryList, reqGetBannerList } from "@/api";

export default {
  namespaced: true,
  state: {
    categoryList: [],
    bannerList: []
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
    }
  },
  mutations: {
    setCategoryList(state, payload) {
      state.categoryList = payload;
    },
    setBannerList(state, payload) {
      state.bannerList = payload;
    }
  }
};
