<script setup>
import Aside from "./Aside.vue";
import Card from "./Card.vue";
import { reactive } from "vue";
import data from "@/data/data.json";

const movies = reactive(data.filter((item) => item.category === "Movie"));
</script>
<template>
  <div class="container">
    <Aside />
    <h1>Movies</h1>
    <Card :items="movies" />
  </div>
</template>
