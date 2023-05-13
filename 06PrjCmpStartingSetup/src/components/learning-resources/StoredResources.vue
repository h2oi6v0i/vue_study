<template>
   <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
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

    /** provide로 보내진 데이터 받기 */
    inject: [ 'resources' ]
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
