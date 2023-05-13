<template>
  <!-- 두 번째 -->
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  /**
   * 첫 번째
   * + type 지운 이유
   *   - 폴스루 속성
   *   - 자체적으로 추가하는 props만 사용하기
   */
  props: [ 'mode' ],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
