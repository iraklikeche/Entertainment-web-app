<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.svg";
import home from "@/assets/icon-nav-home.svg";
import movies from "@/assets/icon-nav-movies.svg";
import tv from "@/assets/icon-nav-tv-series.svg";
import bookmark from "@/assets/icon-nav-bookmark.svg";
import search from "@/assets/icon-search.svg";

const value = ref("");
</script>

<template>
  <div class="container">
    <div class="side">
      <img :src="logo" class="logo" />

      <div class="nav-icons">
        <a href="#">
          <img :src="home" class="icon-nav" />
        </a>
        <a class="icon-nav" href="#">
          <img :src="movies" />
        </a>
        <a class="icon-nav" href="#">
          <img :src="tv" />
        </a>
        <a class="icon-nav" href="#">
          <img :src="bookmark" />
        </a>
      </div>
    </div>

    <main>
      <div class="search">
        <img :src="search" />
        <a-input
          v-model:value="value"
          placeholder="Search for movies or TV series"
          class="input"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  width: 100%;
  padding-top: 20px;
}

.search {
  display: flex;
  gap: 10px;
}
.container {
  max-width: 1200px;
  padding: 20px 40px;
  display: flex;
  gap: 50px;
}

.side {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #161d2f;
  border-radius: 5px;
  height: 90vh;
  gap: 80px;
}

.input {
  background-color: #10141e;
  border: none;
  color: #fff;
  font-weight: bold;
}

.logo {
  width: 30px;
}

.icon-nav {
  width: 20px;
}

.nav-icons {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
/* 
.logo:hover,
.icon-nav:hover {
  color: #fc4747;
} */

a.icon-nav:hover {
  color: #fc4747;
}
</style>
