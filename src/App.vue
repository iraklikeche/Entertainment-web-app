<script setup>
import { RouterView, useRouter } from "vue-router";
import SearchBar from "./components/SearchBar.vue";
import Aside from "./components/Aside.vue";
import { ref } from "vue";

const router = useRouter();
const search = ref("");
const hideSpecificDiv = ref(false);

// Listen for the custom event from the SearchBar component
const onSearchingStatusUpdated = (isSearching) => {
  hideSpecificDiv.value = isSearching;
};

router.beforeEach((to, from, next) => {
  search.value = "";
  next();
});
</script>

<template>
  <div class="container">
    <Aside />
    <main>
      <SearchBar @toggleIsSearching="onSearchingStatusUpdated" />
      <div v-if="!hideSpecificDiv">
        <RouterView />
      </div>
    </main>
  </div>
</template>
