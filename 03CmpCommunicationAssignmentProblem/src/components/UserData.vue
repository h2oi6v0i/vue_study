<template>
  <!-- 연락처 추가 input -->
  <form @submit.prevent="submitData">
    <input type="text" placeholder="이름을 입력하세요." v-model="enteredName" />
    <input type="number" placeholder="나이를 입력하세요." v-model="enteredAge" />
    <button>연락처 추가</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName : '',
      enteredAge  : 0,
    }
  },

  emits: [ 'add-contact' ],

  methods: {
    submitData() {
      this.$emit( 'add-contact', this.enteredName, this.enteredAge );
    }
  },
};
</script>

<style></style>
