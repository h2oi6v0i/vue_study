<template>
  <!-- 사용자가 새 강의 목표를 추가할 수 있는 컴포넌트 -->
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to='body'>
        <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">Okay</button>
    </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },

  data() {
    return {
      /** 처음에는 사용자가 input에 아무것도 입력하지 않았기 때문에 false로 초기화 */
      inputIsInvalid: false,
    };
  },

  methods: {
    setGoal() {
      /** 사용자가 입력한 값 받아오기 */
      const enteredValue = this.$refs.goal.value;

      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },

    confirmError() {
        this.inputIsInvalid = false;
    }
  },
};
</script>

<style></style>
