import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("../components/Movies.vue"),
    },
    {
      path: "/tv-series",
      name: "tv-series",
      component: () => import("../components/TvSeries.vue"),
    },
    {
      path: "/bookmarked",
      name: "bookmarked",
      component: () => import("../components/Bookmarked.vue"),
    },
  ],
});

export default router;
