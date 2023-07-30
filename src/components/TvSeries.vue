<script setup>
import Card from "./Card.vue";
import { reactive } from "vue";
import data from "@/data/data.json";

const tvSeries = reactive(data.filter((item) => item.category === "TV Series"));
</script>
<template>
  <main>
    <h3>TV Series</h3>
    <Card :items="tvSeries" />
  </main>
</template>

<style scoped>
h3 {
  color: #fff;
  font-size: 24px;
}
</style>
