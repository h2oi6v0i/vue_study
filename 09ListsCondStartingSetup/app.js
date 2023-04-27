/** 버튼을 눌렀을 때 입력창에 입력된 값을 얻고 그 값을 목표로 사용해서 goals 배열에 추가하기  */

const app = Vue.createApp({
  data() {
    /** 배열이기 때문에 length 프로퍼티를 가지며 length === 0 이면 없다는 뜻이다. */
    return { 
      enteredGoalValue: '',
      goals: [] 
    };
  },

  methods: {
    addGoal() {
      /** 사용자가 입력한 내용을 전부 새로운 목표로 goals에 푸시한다. */
      this.goals.push( this.enteredGoalValue );
    },

    removeGoal( idx ) {
      /**
       * 삭제하고자 하는 목표에 대한 식별자가 필요하다. 그게 바로 idx (작명 자유)
       * splice ( idx, 1 ) : 입력된 인덱스에 해당하는 항목을 goals 배열에서 찾아서 삭제한다.
       */
      this.goals.splice( idx, 1 );
    }
  },
});

app.mount('#user-goals');