<template>
  <!-- 전체에서 학습 리소스 부분의 진입점으로 딱 한 번만 쓰일 것이기 때문에 The 붙임 -->
  <div>
    <base-card>
      <!-- 커스텀 버튼에 클릭 리스너 추가할 수 있는 이유는 바로 폴스루 속성 때문이다. -->
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources
      </base-button>
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },

  data() {
    return {
      selectedTab: 'stored-resources',
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

  /** 모든 자식 컴포넌트에 데이터 전달하기 */
  provide() {
    return {
      resources: this.storedResources,
    };
  },

  /** active 여부에 따라 클래스 추가 */
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },

  /** 탭 기능 구현 */
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style></style>
