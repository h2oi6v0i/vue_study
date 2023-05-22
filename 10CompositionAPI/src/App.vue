<template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const userName = ref('Gary');

setTimeout(function () {
  // uName = 'Yujung'; uName을 let으로 바꿔서 작업해도 안 됨 왜냐하면 ref를 덮어쓰기 때문에 반응성을 잃음
  userName.value = 'My Hyuk';
}, 2000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
