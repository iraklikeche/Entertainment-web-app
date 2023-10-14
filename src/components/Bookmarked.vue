<script setup>
import { ref, onMounted, watchEffect, computed } from "vue";
import Card from "./Card.vue";
import data from "@/data/data.json";
import { useBookmarkStore } from "../stores/bookmark";

const bookmarkedStore = useBookmarkStore();
const bookmarkedMovies = ref([]);

const isBookmarkedMovie = computed(() => {
  return bookmarkedMovies.value.filter((item) => item.category === "Movie");
});

const isBookmarkedTvSeries = computed(() => {
  return bookmarkedMovies.value.filter((item) => item.category === "TV Series");
});

onMounted(() => {
  bookmarkedStore.setBookmarkedMovies(data);
});

// Update the bookmarkedMovies ref when bookmarkedStore.bookmarked changes
watchEffect(() => {
  bookmarkedMovies.value = bookmarkedStore.bookmarked;
  console.log(bookmarkedMovies.value);
});
</script>

<template>
  <main>
    <h3>Bookmarked Movies</h3>
    <Card :items="isBookmarkedMovie" />
    <div class="separate-bookmark">
      <h3>Bookmarked Tv Series</h3>
      <Card :items="isBookmarkedTvSeries" />
    </div>
  </main>
</template>

<style scoped>
h3 {
  color: #fff;
  font-size: 24px;
}

.separate-bookmark {
  margin-top: 42px;
}
</style>
