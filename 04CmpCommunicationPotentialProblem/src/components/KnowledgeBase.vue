<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- <knowledge-grid :topics="topics" @select-topic="$emit('select-topic', $event)"></knowledge-grid> -->
    <knowledge-grid @select-topic="$emit('select-topic', $event)"></knowledge-grid>
  </section>
</template>

<script>
/**
 * 이 컴포넌트에는 자체 로직이 전혀 없다. -> 불필요함 -> 해결법?
 * Provide & Inject
 * - 한 곳에 데이터를 제공하고 삽입, 즉 해당 데이터를 다른 곳에서 사용할 수 있게 한다.
 * - 부모-자식 관계여야 한다.
 */
export default {
  // props: ['topics'],
  emits: ['select-topic'],
};
</script>