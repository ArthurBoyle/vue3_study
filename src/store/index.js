import { createStore } from "vuex";
import home from "@/store/modules/home";
import search from "@/store/modules/search";

export default createStore({
  modules: {
    home,
    search
  }
});
