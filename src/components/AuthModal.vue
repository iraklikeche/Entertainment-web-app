<script setup>
import { ref } from "vue";

const props = defineProps(["isLogin"]);
const visible = ref(false);

const showModal = () => {
  visible.value = true;
};

const handleOk = (e) => {
  console.log(e);
  visible.value = false;
};

const title = props.isLogin ? "Sign in" : "Sign Up";
</script>

<template>
  <div>
    <a-button type="primary" @click="showModal" class="sign" size="large">{{
      title
    }}</a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <a-input class="input" v-model:value="value" placeholder="Username" />
      <a-input
        class="input"
        v-if="!isLogin"
        v-model:value="value"
        placeholder="Email"
      />
      <a-input class="input" v-model:value="value" placeholder="Password" />
    </a-modal>
  </div>
</template>

<style scoped>
.sign,
.sign:link,
.sign:visited {
  display: flex;
  align-items: center;

  background-color: #fc4747;
  border: none;
  padding: 10px 50px;
}

.sign:hover,
.sign:active {
  background-color: #fff;
  color: #000;
  transition: 1s;
}

.input {
  margin-top: 10px;
}
</style>
