import { createApp } from "vue";
import Router from "./router";
import Store from "./store";
import App from "./App.vue";
import TypeNav from "@/components/TypeNav";
import "./mock";

createApp(App)
  .use(Router)
  .use(Store)
  .component("TypeNav", TypeNav)
  .mount("#app");
