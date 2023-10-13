<script setup>
import { reactive, computed } from "vue";
import data from "@/data/data.json";
import Card from "./Card.vue";
import Recommended from "./Recommended.vue";

const trendingItems = reactive(data.filter((item) => item.isTrending));
const filteredItems = computed(() => data.filter((item) => item.isTrending));
</script>

<template>
  <h3>Trending</h3>
  <div class="carousel trending">
    <Card :items="filteredItems" :isFlex="true" :isMain="true" />
  </div>
  <Recommended />
</template>

<style scoped>
.trending {
  display: flex;
  max-width: 1300px;
  /* -webkit-overflow-scrolling: touch; */
}

.carousel {
  scroll-snap-type: x mandatory;
  overflow: auto;
}

/* Hide scrollbar for Chrome, Safari, and Opera */
/* .carousel::-webkit-scrollbar {
  width: 0;
} */
/* 
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
} */
</style>
