import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/jesus",
    name: "Jesus",
    component: () => import("../pages/Jesus.vue"),
  },
  {
    path: "/disciple",
    name: "Disciple",
    component: () => import("../pages/Disciple.vue"),
  },
  {
    path: "/evangelism",
    name: "Evangelism",
    component: () => import("../pages/Evangelism.vue"),
  },
  {
    path: "/partage",
    name: "Share",
    component: () => import("../pages/Share.vue"),
  },
  {
    path: "/unity",
    name: "Unity",
    component: () => import("../pages/Unity.vue"),
  },
  {
    path: "/worship",
    name: "Worship",
    component: () => import("../pages/Worship.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("@/pages/About.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("../pages/NotFound.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
