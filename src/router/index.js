import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

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
      path: "/search",
      component: Search,
      meta: { show: true }
    }
  ]
});
