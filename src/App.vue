<script setup>
import { RouterView } from "vue-router";
import SearchBar from "./components/SearchBar.vue";
import Aside from "./components/Aside.vue";
</script>

<template>
  <div class="container">
    <Aside />
    <main>
      <SearchBar />
      <RouterView />
    </main>
  </div>
</template>
