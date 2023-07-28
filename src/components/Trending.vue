<script setup>
import { reactive } from "vue";
import data from "@/data/data.json";
import Card from "./Card.vue";
import Recommended from "./Recommended.vue";
const trendingItems = reactive(data.filter((item) => item.isTrending));
</script>

<template>
  <h3>Trending</h3>
  <div class="trending">
    <Card :items="trendingItems" :isFlex="true" />
  </div>
  <Recommended />
</template>

<style scoped>
.trending {
  display: flex;
}
</style>
