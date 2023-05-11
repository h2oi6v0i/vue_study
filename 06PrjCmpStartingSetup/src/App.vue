<template>
  <!-- 2. resources가 storedResources가 된다. -->
  <stored-resources :resources="storedResources" />
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';

export default {
  components: {
    StoredResources,
  },

  data() {
    return {
      storedResources: [
        {
          /** 키 추가하거나 리소스를 삭제하는 기능을 위해서도 ID가 필요함 */
          id: 'official-guide',
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Poppins', sans-serif;
}

body {
  margin: 0;
}
</style>
