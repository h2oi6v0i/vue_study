<template>
  <ul>
    <!-- 배열의 모든 문자열이 고유하다고 가정하고 :key에 goal 넣은 것! -->
    <li v-for="goal in goals" :key="goal">
		<!-- 반복될 때마다 생성되는 goal을 item에 전달한다. -->
      <slot :item="goal" another-props="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  /**
   * slot 내부에 props를 작성하면
   * slot을 정의한 컴포넌트(CourseGoals.vue) 내부에서
   * slot에 대한 마크업을 전달한 컴포넌트(App.vue)에 데이터를 전달할 수 있다.
   * 
   */
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>
