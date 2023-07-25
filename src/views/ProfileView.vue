<script setup>
import { ref, reactive } from "vue";
import logo from "@/assets/logo.svg";
import home from "@/assets/icon-nav-home.svg";
import movies from "@/assets/icon-nav-movies.svg";
import tv from "@/assets/icon-nav-tv-series.svg";
import bookmark from "@/assets/icon-nav-bookmark.svg";
import search from "@/assets/icon-search.svg";
import data from "@/data/data.json";

const value = ref("");
console.log(data);
const trendingItems = reactive(data.filter((item) => item.isTrending));
console.log(data[0].thumbnail.trending.large);
console.log(data[0].thumbnail.trending.large);
</script>

<template>
  <div class="container">
    <div class="side">
      <a href="#" class="logo-link">
        <img :src="logo" class="logo" />
      </a>
      <div class="nav-icons">
        <a href="#" class="icon-link">
          <img :src="home" class="icon-nav" />
        </a>
        <a class="icon-link" href="#">
          <img :src="movies" class="icon-nav" />
        </a>
        <a class="icon-link" href="#">
          <img :src="tv" class="icon-nav" />
        </a>
        <a class="icon-link" href="#">
          <img :src="bookmark" class="icon-nav" />
        </a>
      </div>
    </div>

    <main>
      <img :src="data[0].thumbnail.trending.large" />
      <div class="search">
        <img :src="search" />
        <a-input
          v-model:value="value"
          placeholder="Search for movies or TV series"
          class="input"
        />
      </div>
      <div class="main-content">
        <h3>Trending</h3>
        <div class="trending">
          <div>
            <div
              v-for="(item, index) in trendingItems"
              :key="index"
              class="card"
              :style="{
                'background-image': `url(${item.thumbnail.trending.large})`,
              }"
            >
              <div class="bookmark-container">
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                    stroke="#FFF"
                    stroke-width="1.5"
                    fill="none"
                  />
                </svg>
              </div>
              <div class="span-elements">
                <span>{{ data[0].year }}</span>
                <span>&#x2022; {{ item.category }}</span>
                <span>&#x2022; {{ item.rating }}</span>
              </div>
              <p class="movie-name">{{ item.title }}</p>
            </div>
          </div>
        </div>
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
  margin-bottom: 20px;
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

.icon-link:hover .icon-nav {
  opacity: 0.5;
}

.trending {
  display: flex;
}

.main-content h3 {
  color: #fff;
  font-size: 24px;
}

.card {
  width: 360px;
  height: 170px;
  /* background-image: url("@/assets/thumbnails/beyond-earth/trending/large.jpg"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 16px;
  position: relative;
}

span {
  color: #fff;
}

p {
  color: #fff;
}
.span-elements {
  display: flex;
  gap: 10px;
  opacity: 0.7;
}

.movie-name {
  font-weight: bold;
}

.bookmark-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #70707d;
  border-radius: 50%;
  position: absolute;
  top: 5%;
  right: 4%;
}
</style>
