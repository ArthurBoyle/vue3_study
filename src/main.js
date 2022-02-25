import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import TypeNav from "@/components/TypeNav";

createApp(App).use(Router).component("TypeNav", TypeNav).mount("#app");
