const app = Vue.createApp({
  data() {
    return {
      counter       : 0,
      name          : '',
      confirmedName : ''
    };
  },

  methods: {
    setName( event, lastName ) {
      // this.name = event.target.value + ' ' + lastName;
      this.name = `${ event.target.value } ${ lastName }`;
    },

    confirmInput() {
      this.confirmedName = this.name;
    },

    submitForm( event ) {
      console.log('이벤트 수식 공부');
    },

    add( num ) {
      this.counter = this.counter + num;
      /**
       * 아까처럼 메서드를 사용해서 동적으로 출력하는 것이 아니고
       * 버튼을 클릭할 때 실행되도록 할 것이기 때문에 return 할 필요 없다. 
       */
    },

    reduce( num ) {
         this.counter = this.counter - num;
    }
  },
});

app.mount('#events');
