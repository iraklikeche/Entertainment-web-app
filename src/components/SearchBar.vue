<script setup>
import { ref, watch, computed } from "vue";
import data from "@/data/data.json";
import searchIcon from "../../public//assets/icon-search.svg";

const movies = ref(data);
const search = ref("");

watch(search, () => {
  movies.value = data.filter((movie) =>
    movie.title.toLowerCase().includes(search.value.toLowerCase())
  );
  console.log(movies.value);
});

// const trendingItems = computed(() =>
//   movies.value.filter(
//     (item) =>
//       item.isTrending &&
//       item.title.toLowerCase().includes(search.value.toLowerCase())
//   )
// );

// console.log(trendingItems.value);

// watch(search, () => {
//   trendingItems.value = data.filter((movie) =>
//     movie.title.toLowerCase().includes(search.value.toLowerCase())
//   );
//   console.log("hello");
// });
</script>
<template>
  <div class="search">
    <img :src="searchIcon" />
    <input
      v-model.trim="search"
      placeholder="Search for movies or TV series"
      class="input"
    />
  </div>
</template>

<style scoped>
.search {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
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
