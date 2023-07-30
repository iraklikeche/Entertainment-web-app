import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Movies from "../components/Movies.vue";
import TvSeries from "../components/TvSeries.vue";
import Bookmarked from "../components/Bookmarked.vue";
import ProfileView from "../views/ProfileView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      children: [
        { path: "", component: ProfileView }, // Default view when visiting the home page
        { path: "movies", component: Movies },
        { path: "tv-series", component: TvSeries },
        { path: "bookmarked", component: Bookmarked },
      ],
    },
  ],
});

export default router;
