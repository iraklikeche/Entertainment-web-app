<script setup>
import { ref, watch, defineEmits, onMounted } from "vue";
import data from "@/data/data.json";
import searchIcon from "/assets/icon-search.svg";
import Card from "./Card.vue";
import { useRouter } from "vue-router";

const movies = ref(data);
const search = ref("");
const isSearching = ref(false);
const router = useRouter();

const emit = defineEmits(["toggleIsSearching"]);

const emitSearchingStatus = () => {
  // Emit a custom event named 'searching-status-updated' with the isSearching value
  emit("toggleIsSearching", isSearching.value);
};

watch(search, () => {
  isSearching.value = search.value.trim() !== ""; // Check if the search input is not empty
  emitSearchingStatus();
  if (isSearching.value) {
    movies.value = data.filter((movie) =>
      movie.title.toLowerCase().includes(search.value.toLowerCase())
    );
  } else {
    movies.value = data; // Reset movies to the original data when search input is empty
  }
});

onMounted(() => {
  // Reset search input when the route changes
  router.afterEach(() => {
    search.value = "";
  });
});
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
  <div v-if="isSearching">
    <p class="found">Found {{ movies.length }} results for "{{ search }}"</p>
    <div class="carousel">
      <Card :items="movies" :isFlex="true" :isMain="true" />
    </div>
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

.carousel {
  scroll-snap-type: x mandatory;
  overflow: auto;
  display: flex;
  max-width: 1300px;
}

.found {
  color: #fff;
}
</style>
