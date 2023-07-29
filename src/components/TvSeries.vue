<script setup>
import Aside from "./Aside.vue";
import Card from "./Card.vue";
import { reactive } from "vue";
import data from "@/data/data.json";

const tvSeries = reactive(data.filter((item) => item.category === "TV Series"));
</script>
<template>
  <div class="container">
    <Aside />
    <main>
      <h3>Movies</h3>
      <Card :items="tvSeries" />
    </main>
  </div>
</template>

<style scoped>
h3 {
  color: #fff;
  font-size: 24px;
}
</style>
