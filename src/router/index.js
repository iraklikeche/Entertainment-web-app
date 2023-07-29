import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Movies from "../components/Movies.vue";
import TvSeries from "../components/TvSeries.vue";
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
      component: Movies,
    },
    {
      path: "/tv-series",
      name: "tv-series",
      component: TvSeries,
    },
  ],
});

export default router;
