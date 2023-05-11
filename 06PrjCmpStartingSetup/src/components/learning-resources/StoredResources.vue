<template>
   <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
    components: {
        LearningResource 
    },

    /** 1. 외부 데이터가 필요함을 Vue에게 알리기 (작명 내 맘) */
    props: [ 'resources' ]
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
