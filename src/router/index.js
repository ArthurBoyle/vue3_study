import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      meta: { show: true }
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false }
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false }
    },
    {
      path: "/search/:keyword?",
      name: "search",
      component: Search,
      meta: { show: true }
    },
    {
      path: "/detail/:skuId",
      component: Detail,
      meta: { show: true }
    },
    {
      path: "/addCartSuccess",
      component: AddCartSuccess,
      meta: { show: true }
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});
