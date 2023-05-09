<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    >
    </user-info>
    <course-goals #default="slotProps">
      <!-- slotProps의 값은 언제나 객체이며 작명은 내 맘! -->
      <!-- slot이 하나일 때 template 빼서 컴포넌트 태그에 직접 넣을 수 있음 -->
      <!-- <template #default="slotProps"> -->
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps }}</p>
        <p>{{ slotProps[ 'anotherProps' ] }}</p>
      <!-- </template> -->
    </course-goals>
  </div>
</template>

<script>
import BadgeList from "./components/BadgeList.vue";
import CourseGoals from './components/CourseGoals.vue';
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  /** 지역 컴포넌트 */
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
  },

  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
