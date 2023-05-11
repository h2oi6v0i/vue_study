<template>
  <ul>
  </ul>

</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',  /** 키 추가하거나 리소스를 삭제하는 기능을 위해서도 ID가 필요함 */
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
           {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
};
</script>

<style></style>
