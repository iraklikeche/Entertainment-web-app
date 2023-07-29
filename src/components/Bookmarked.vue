<script setup>
import { reactive } from "vue";
import Card from "./Card.vue";
import Aside from "./Aside.vue";
import data from "@/data/data.json";
import { useBookmarkStore } from "../stores/bookmark";

const { bookmarks, addBookmark } = useBookmarkStore();
const isBookmarkedMovie = reactive(
  data.filter((item) => item.isBookmarked && item.category === "Movie")
);
const isBookmarkedTvSeries = reactive(
  data.filter((item) => item.isBookmarked && item.category === "TV Series")
);

// Create a computed property to add the `item` data to bookmarks

// const bookmarksWithDetails = computed(() =>
//   bookmarks.map((bookmark) => ({
//     ...bookmark,
//     year: bookmark.year,
//     category: bookmark.category,
//     rating: bookmark.rating,
//   }))
// );
</script>

<template>
  <div class="container">
    <Aside />
    <main>
      <h3>Bookmarked Movies</h3>
      <Card :items="isBookmarkedMovie" />
      <div class="separate-bookmark">
        <h3>Bookmarked Tv Series</h3>
        <Card :items="isBookmarkedTvSeries" />
      </div>
    </main>
  </div>
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
