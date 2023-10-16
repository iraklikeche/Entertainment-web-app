<script setup>
import Trending from "../components/Trending.vue";
</script>

<template>
  <div class="main-content">
    <Trending />
  </div>
</template>

<style scoped>
.welcome {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sign-btns {
  display: flex;
  gap: 50px;
}

.sign {
  display: flex;
  align-items: center;

  background-color: #fc4747;
  border: none;
  padding: 10px 50px;
}
h1 {
  color: #fff;
}
</style>
