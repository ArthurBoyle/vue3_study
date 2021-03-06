import { createApp } from "vue";
import Router from "./router";
import Store from "./store";
import App from "./App.vue";
import "./mock";

createApp(App).use(Router).use(Store).mount("#app");
