import { createStore } from "vuex";
import home from "@/store/modules/home";
import search from "@/store/modules/search";
import detail from "@/store/modules/detail";

export default createStore({
  modules: {
    home,
    search,
    detail
  }
});
