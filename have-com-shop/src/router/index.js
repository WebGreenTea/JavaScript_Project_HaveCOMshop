import { createWebHistory, createRouter } from "vue-router";
import mainPage from "@/components/mainPage.vue";
import register from "@/components/register.vue";
import login from "@/components/login.vue";
import helloworld from "@/components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/helloworld",
    name: "helloworld",
    component: helloworld,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;