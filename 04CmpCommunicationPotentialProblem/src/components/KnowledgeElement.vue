<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- <button @click="$emit('select-topic', id)">Learn More</button> -->
    <!-- activateTopic( topicId ) 매개변수 필요함 -> 하단의 id는 props에서 가져온 id -->
    <button @click="selectTopic(id)">Learn More</button> 
  </li>
</template>

<script>
export default {
  inject: [ 'selectTopic' ],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>