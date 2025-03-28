import { createRouter, createWebHistory } from "vue-router";
import AddressView from "../components/DynamicForm.vue"
import ThanksView from "../components/ThanksPage.vue"

const routes = [
  { path: "/", component: AddressView },
  { path: "/thanks", component: ThanksView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;