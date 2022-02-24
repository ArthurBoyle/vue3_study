// import Vue from "vue";
// import VueRouter from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

// Vue.use(VueRouter);

/*const originRouter = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originRouter.call(this, location).catch((err) => err);
};

const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location) {
  return originReplace.call(this, location).catch((err) => err);
};*/

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
      name: "search",
      component: Search,
      meta: { show: true }
    }
  ]
});
