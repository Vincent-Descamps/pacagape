import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/jesus",
    name: "Jesus",
    component: () => import("../views/Jesus.vue"),
  },
  {
    path: "/disciple",
    name: "Disciple",
    component: () => import("../views/Disciple.vue"),
  },
  {
    path: "/evangelism",
    name: "Evangelism",
    component: () => import("../views/Evangelism.vue"),
  },
  {
    path: "/partage",
    name: "Share",
    component: () => import("../views/Share.vue"),
  },
  {
    path: "/unity",
    name: "Unity",
    component: () => import("../views/Unity.vue"),
  },
  {
    path: "/worship",
    name: "Worship",
    component: () => import("../views/Worship.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
