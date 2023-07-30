<script setup>
import Card from "./Card.vue";
import { reactive } from "vue";
import data from "@/data/data.json";

const movies = reactive(data.filter((item) => item.category === "Movie"));
</script>
<template>
  <main>
    <h3>Movies</h3>
    <Card :items="movies" />
  </main>
</template>

<style scoped>
h3 {
  color: #fff;
  font-size: 24px;
}
</style>
