<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
        <p v-if="error">{{ error }}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      error: null
    };
  },

  // emits: ['survey-submit'],

  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      this.error = null;

      /** fetch( 이 URL에서 데이터를 가져옴 , 요청을 구성할 수 있는 JS 객체 ) */      
      fetch( 'https://vue-http-demo-dae75-default-rtdb.firebaseio.com/surveys.json', {
        method: 'POST',
        /** Content-Type 헤더를 application/json으로 설정해서 JSON 형식의 일부 데이터가 요청에 추가된 걸 서버에 알린다. */
        headers: {
          'Content-Type': 'application/json'
        },
        /** 과거에 발생시킨 값이 이 객체에 추가된다. 그리고 JS 객체를 JSON 형식으로 변환한다. */
        body: JSON.stringify( { name: this.enteredName, rating: this.chosenRating } ),
      }).then( response => {
        if ( response.ok) {
          // ....
        } else {
          /** 새 오류 객체 발생 : 새로운 오류를 발생시켜서 자동으로 catch 블록이 이를 인식하게 만듦 */
          throw new Error( 'Could not save data!' );
        }
      }).catch(error => {
        console.log(error);
        this.error = error.message;
      });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>