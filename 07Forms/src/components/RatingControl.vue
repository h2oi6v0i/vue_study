<template>
  <ul>
    <!-- type="button"으로 설정하면 form 태그 안에 있어도 클릭시 양식이 제출되지 않는다. -->
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emit: ['update:modelValue'],
  /** 외부에서 오는 modelValue의 변화에 반응하지 않는 data 때문에 초기화가 안 됨 */
  //   data() {
  //     return {
  //       /** props에서 얻은 modelValue로 activateOption을 초기화해서 TheForm.vue 컴포넌트가 초깃값을 설정할 수 있도록 한다. */
  //       activeOption: this.modelValue,
  //     };
  //   },

  /** data() 대신 computed를 사용하자 */
  computed: {
    /**
     * 새 옵션을 선택할 때마다 update:modelValue 이벤트를 발생시키고 있다.
     * 그리고 이 이벤트는 v-model에 의해 선택되고 우리가 선택한 옵션은 rating 데이터 프로퍼티에 저장된다
     * activeOption() { return this.modelValue; }, 하지만 이걸 다 건너뛰고 바로 template에서 설정할 수 있다.
     */
  },

  methods: {
    activate(option) {
      //   this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },

  /**
   * <li :class="{ active: modelValue === 'average' }"> this.modelValue라고 안 쓰는 이유?
   * 해당 코드에서는 this 키워드를 사용하지 않고 modelValue만을 사용한 이유는 해당 컴포넌트의 props에 modelValue가 등록되어 있기 때문입니다.
   * props는 컴포넌트 외부에서 해당 컴포넌트에 데이터를 전달할 때 사용하는 속성이며, 컴포넌트 내부에서는 해당 props를 this를 사용하지 않고 직접 참조할 수 있습니다.
   * 따라서 modelValue를 직접 사용하면 해당 컴포넌트의 props에 등록된 modelValue를 참조하게 됩니다.
   * 이와 같이 컴포넌트의 props를 직접 사용하는 것은 Vue.js의 관례입니다.
   */
};
</script>

<style scoped>
.active {
  border-color: cornflowerblue;
}

.active button {
  color: cornflowerblue;
}

ul {
  display: flex;
  margin: 0.5rem 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
}

button {
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
</style>
