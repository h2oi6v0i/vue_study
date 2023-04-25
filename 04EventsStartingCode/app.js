const app = Vue.createApp({
  data() {
    return {
      counter       : 10 ,
      confirmedName : '',
      name          : '',
      lastName      : '', // name이나 lastName이 변경될 때마다 fullname 업데이트하기
      // fullname      : '',
    };
  },

  watch: {
    /**
     * 메서드 정의하는 곳
     * 감시자는 의존성 중 하나가 변경될 때 Vue에 실행하도록 지시할 수 있는 함수 (computed와 넘 비슷한 걸요...)
     * 실제로 computed 대신 watch 사용할 수 있다.
     * data, computed에서 사용한 이름을 watch에서 사용할 수 있다.
     */

    /**
     * watch 사용하면 좋은 예시
     * 1.counter가 50을 초과하면 재설정한다.
     *   어떤 일이 발생하면 counter를 변경한다.
     *   counter 감시 -> counter 최신값 가져오기 -> counter의 값이 50보다 큰지 확인 -> 참인 경우 this.counter를 0으로 설정
     * 2.특정 데이터가 변경되면 보내는 HTTP 요청
     * 3.특정 값이 변경되면 설정하는 타이머
     *   값이 50을 초과하면 타이머를 2초로 설정하고, 2초 후에 실행되는 함수에서 카운터를 재설정한다.
     * 
     * - 즉, data를 업데이트하지만 항상 업데이트해서는 안 되는 로직을 실행하려는 경우에 watch를 사용한다.
     * 모든 프로퍼티 변화가 아닌 일부 프로퍼티의 변화에 반응하여 데이터를 업데이트하는 경우에 watch 사용한다.
     * 출력값을 동적으로 계산할 때는 연산 프로퍼티 사용해야 한다.
     */

    // counter( value ) {
    //   if ( value > 50 ) {
    //     const that = this;

    //     setTimeout( function() {
    //       // this.counter = 0; 외부의 this와 다른 것을 참조하기 때문에 작동하지 않는다.
    //       that.counter = 0;
    //     }, 2000 );
    //   }
    // } 

    // 작동함
    counter( value ) {
      if ( value > 50 ) {
        value = 0;
      }
    },


    // 작동 안 함
    // counter( value ) {
    //   if ( value > 50 ) {
    //     this.counter = 0;
    //   }
    // } 







    // name( value ) {
    //   if ( value === '' ) {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName; 
    //   }
    // },

    // lastName( value ) {
    //   if ( value === '' ) {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value; 
    //   }
    // }
  },

  computed: {
    fullname() {
      console.log( 'Running Again!' );
   
      if ( this.name === '' || this.lastName === '' ) {
        return ''; // 둘 중 하나가 비어 있으면 빈 전체 이름을 반환한다.
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