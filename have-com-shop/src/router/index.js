import { createWebHistory, createRouter } from "vue-router";
import mainPage from "@/components/mainPage.vue";
import register from "@/components/register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: mainPage,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;