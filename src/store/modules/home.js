import { getCategoryList } from "@/api";

export default {
  namespaced: true,
  state: {
    categoryList: []
  },
  actions: {
    async getCategoryList({ commit }) {
      const { code, data } = await getCategoryList();
      if (code === 200) {
        commit("setCategoryList", data.slice(0, 16));
      }
    }
  },
  mutations: {
    setCategoryList(state, payload) {
      state.categoryList = payload;
    }
  }
};
