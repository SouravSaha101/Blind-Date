import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/styles.css";
import "./assets/css/bootstrap.css";
import { firestorePlugin } from 'vuefire'

createApp(App)
.use(firestorePlugin)
  .use(store)
  .use(router)
  .mount("#app");
