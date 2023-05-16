<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isLoading: '',
    };
  },

  methods: {
    loadExperiences() {
      /** 로딩중... */
      this.isLoading = true;

      fetch(
        'https://vue-http-demo-dae75-default-rtdb.firebaseio.com/surveys.json'
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          /** 로딩 완료! */
          this.isLoading = false;

          // this.results = data; data는 id 프로퍼티로 이루어진 객체이기 때문에 이렇게 작업하면 안 됨

          /** 1. results라는 상수를 만든 뒤 빈 배열을 지정한다. */
          const results = [];

          /** 2. data 내의 모든 id를 검색하도록 설정한다. */

          for (const id in data) {
            /** 3. 새로운 객체를 results 배열에 푸시한다. */
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }

          /** 4. data()의 임시 results를 results와 같다고 설정한다. */
          this.results = results;
        });
    },
  },

  /** 컴포넌트가 화면에 표시될 때 데이터 로드되게 하기 */
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
