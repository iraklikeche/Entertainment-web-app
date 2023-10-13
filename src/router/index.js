import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      // children: [
      //   { path: "", component: ProfileView }, // Default view when visiting the home page
      //   { path: "movies", component: Movies },
      //   { path: "tv-series", component: TvSeries },
      //   { path: "bookmarked", component: Bookmarked },
      // ],
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
