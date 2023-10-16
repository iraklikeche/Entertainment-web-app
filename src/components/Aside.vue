<script setup>
import logo from "/assets/logo.svg";
import trending from "/assets/icon-nav-home.svg";
import moviesIcon from "/assets/icon-nav-movies.svg";
import tv from "/assets/icon-nav-tv-series.svg";
import bookmark from "/assets/icon-nav-bookmark.svg";

import { RouterLink } from "vue-router";
</script>

<template>
  <div class="side">
    <img :src="logo" class="logo" />

    <div class="nav-icons">
      <RouterLink to="/" class="icon-link">
        <img :src="trending" class="icon-nav" />
      </RouterLink>
      <RouterLink to="/movies" class="icon-link">
        <img :src="moviesIcon" class="icon-nav" />
      </RouterLink>
      <RouterLink to="/tv-series" class="icon-link">
        <img :src="tv" class="icon-nav" />
      </RouterLink>
      <RouterLink to="/bookmarked" class="icon-link">
        <img :src="bookmark" class="icon-nav" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.side {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 20px;
  background-color: #161d2f;
  border-radius: 12px;
  height: 90vh;
  gap: 80px;
}

.logo {
  width: 30px;
}

.nav-icons {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.icon-link:hover .icon-nav {
  opacity: 0.5;
}

@media (max-width: 1200px) {
  .side {
    flex-direction: row;
    height: auto;
    justify-content: center;
    gap: 120px;
  }

  .nav-icons {
    flex-direction: row;
    gap: 72px;
  }
}
</style>
