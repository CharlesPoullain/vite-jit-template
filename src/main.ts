import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.css";
import "./styles/nprogress.css";
import router from "./router";

createApp(App).use(router).mount("#app");
