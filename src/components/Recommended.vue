<script setup>
import { reactive } from "vue";
import data from "@/data/data.json";
import Card from "./Card.vue";
const recommended = reactive(data.filter((item) => !item.isTrending));
</script>
<template>
  <div class="recommended">
    <h3>Recommended for you</h3>
    <div class="recommended-cards">
      <Card :items="recommended" :isFlex="false" />
    </div>
  </div>
</template>

<style scoped>
.recommended {
  margin-top: 30px;
}
</style>
