<script setup>
import AuthModal from "../components/AuthModal.vue";
import Aside from "../components/Aside.vue";
import SearchBar from "../components/SearchBar.vue";

import { ref } from "vue";

const isAuth = ref(true);
const isLogin = ref(false);
</script>

<template>
  <div class="welcome" v-if="isLogin">
    <h1>Welcome To {{ isAuth ? "Entertainment App" : "Your Profile" }}</h1>
    <div class="sign-btns" v-if="isAuth">
      <AuthModal :isLogin="false" />
      <AuthModal :isLogin="true" />
    </div>
  </div>
  <div v-else class="container">
    <Aside />
    <main>
      <div>
        <SearchBar />
      </div>
      <div>
        <router-view />
      </div>
    </main>
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
