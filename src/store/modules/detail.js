import { reqGetDetailInfo } from "@/api";

export default {
  namespaced: true,
  state: {
    detailInfo: {
      categoryView: {},
      skuInfo: {
        skuImageList: []
      },
      spuSaleAttrList: []
    }
  },
  getters: {
    categoryView(state) {
      return state.detailInfo.categoryView;
    },
    skuInfo(state) {
      return state.detailInfo.skuInfo;
    },
    spuSaleAttrList(state) {
      return state.detailInfo.spuSaleAttrList;
    }
  },
  actions: {
    async getDetailInfo({ commit }, payload) {
      const { code, data } = await reqGetDetailInfo(payload);
      if (code === 200) {
        commit("setDetailInfo", data);
      }
    }
  },
  mutations: {
    setDetailInfo(state, payload) {
      state.detailInfo = payload;
    }
  }
};
