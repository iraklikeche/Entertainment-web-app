<script setup>
import Aside from "../components/Aside.vue";
import Trending from "../components/Trending.vue";
import { ref, watch, computed, reactive } from "vue";
import data from "@/data/data.json";
import searchIcon from "@/assets/icon-search.svg";
import Card from "../components/Card.vue";

const search = ref("");

const trendingItems = computed(() =>
  data.filter(
    (item) =>
      item.isTrending &&
      item.title.toLowerCase().includes(search.value.toLowerCase())
  )
);

// console.log(data[0].thumbnail.trending.large);
// console.log(trendingItems);

watch(search, () => {
  trendingItems.value = data.filter((movie) =>
    movie.title.toLowerCase().includes(search.value.toLowerCase())
  );
  console.log("hello");
});

const recommended = reactive(data.filter((item) => !item.isTrending));
</script>

<template>
  <div class="container">
    <Aside />

    <main>
      <div class="search">
        <img :src="searchIcon" />
        <input
          v-model.trim="search"
          placeholder="Search for movies or TV series"
          class="input"
        />
      </div>
      <div class="main-content">
        <Trending />
        <div class="recommended">
          <h3>Recommended for you</h3>
          <div class="recommended-cards">
            <Card :items="recommended" :isFlex="false" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.recommended {
  margin-top: 30px;
}

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

.input {
  background-color: #10141e;
  border: none;
  color: #fff;
  font-weight: bold;
  width: 100%;
  padding-left: 10px;
}
</style>
