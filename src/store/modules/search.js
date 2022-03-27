import { reqGetSearchInfo } from "@/api";

export default {
  namespaced: true,
  state: {
    searchInfo: {}
  },
  getters: {
    attrsList(state) {
      return state.searchInfo.attrsList;
    },
    goodsList(state) {
      return state.searchInfo.goodsList;
    },
    trademarkList(state) {
      return state.searchInfo.trademarkList;
    }
  },
  actions: {
    async getSearchInfo({ commit }, payload = {}) {
      const { code, data } = await reqGetSearchInfo(payload);
      if (code === 200) {
        commit("setSearchInfo", data);
      }
    }
  },
  mutations: {
    setSearchInfo(state, payload) {
      state.searchInfo = payload;
    }
  }
};
