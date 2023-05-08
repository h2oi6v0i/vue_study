<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'],
  /**
   * inject는 기본적으로 프로퍼티와 동일하게 작동한다.
   */
  inject: [ 'topics' ],


  emits: [ 'select-topic' ]
};
</script>