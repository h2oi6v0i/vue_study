const app = Vue.createApp({
  data() {
    return {
      counter       : 10 ,
      name          : '',
      confirmedName : ''
    };
  },

  computed: {
    fullname() {
      console.log( 'Running Again!' );
   
      if ( this.name === '' ) {
        return '';
      } else {
        return this.name + ' ' + 'Jeon';
      }
    }

  },

  methods: {
    ouputFullname() {
      
      console.log( 'Running Again!' );
   
      if ( this.name === '' ) {
        return '';
      } else {
        return this.name + ' ' + 'Jeon'; // 이벤트에 바인딩 말고 호출하는 데 사용할 것이기 때문에 return 해줘야 함
      }
    },

    setName( event ) {
      this.name = event.target.value;
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
    },

    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');


/**
 * 사용자가 입력한 값만 가져오는 것이 아니라 입력 요소에 값을 설정하고 버튼이나 다른 로직으로 재설정할 수 있도록 만들고 싶다!
 * 이 기능을 구현하려면 입력을 그냥 수신하는 것이 아니라 저장된 값을 value 프로퍼티에 바인딩해서 입력 요소에 전달하면 된다.
 * 자주 구현되는 패턴이기 때문에 Vue에서 축약어를 제공한다. 그것이 바로 v-model!
 * v-model은 v-bind:value v-on:input의 축약어이다.
 * 이게 바로 양방향 바인딩이라고 불리는 개념이다.
 * 입력 요소에서 나오는 이벤트 즉, 입력 이벤트를 수신하는 동시에 값을 입력 요소에 다시 보낸다.
 */