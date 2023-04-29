const app = Vue.createApp({
  data() {
    return {
      currentUserInput : '',
      message          : 'Vue is great!',
    };
  },

  methods: {
    saveInput( event ) {
      this.currentUserInput = event.target.value;
    },

    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount( '#app' );

/**
 * -------------------- 반응성 --------------------
 * Vue는 data에서 정의한 내용을 지속적으로 추적한다.
 * Vue는 이 data 객체의 모든 프로퍼티를 전역 프로퍼티와 합쳐서 내부에서 관리하는 하나의 객체로 만든다.
 * 이때 methods도 해당 객체에 합쳐진다.
 * 또한, this가 해당 전역 객체를 가리키도록 확인한다.
 * data에 대해 Vue가 하는 작업 중 가장 핵심적인 일은 data 객체를 반응형 data 객체로 바꾸는 일이다.
 * 즉, JavaScript의 내장 기능인 프록시를 활용하여 data 프로퍼티를 래핑하고 message와 같이 새 값이 할당될 때마다 알리는 작업을 한다.
 * message에 새로운 값을 설정할 때마다 Vue가 그것을 알아차린다.
 */

// let message = 'Hello';
// let longMessage = message + ' World!';

// console.log( longMessage ); // Hello World!

// message = 'Hello!!!!!';

// console.log( longMessage ); // Hello World!

/**
 * JavaScript는 반응형이 아니기 때문에 기존에 변수가 있고 이후 해당 변수에 변경 사항이 생긴다고 해도 앞서 작성한 연산이 재실행되지 않는다.
 * Vue는 내장 메커니즘을 통해 message의 변경 사항을 인식하고 앱에서 해당 message와 관련이 있는 부분을 업데이트 한다. (프록시 사용)
 */

const data = {
  message     : 'Hello!',
  longMessage : 'Hello, World!'
}

/**
 * JavaScript Proxy로 래핑하기
 * - Proxy는 모던 JavaScript에 내장된 생성자 함수
 * - 이 코드를 테스팅할 때는 Chrome과 같은 모던 브라우저에서 작업해야 한다.
 * - Proxy라는 상수로 저장하고 래핑할 객체를 입력한다.
 * - 두 번째 인수가 될 두 번째 객체로 입력해야 한다.
 *   -> 래핑될 객체에 대한 핸들러를 담고 있는 객체여야 한다.
 *   -> 프록시가 지원하는 '트랩'을 설정할 수 있어야 한다.
 *   -> handler 내에 set 함수를 추가하면 자동으로 그 인수로서 target, key, value를 전송받는다.
 */

const handler  = {
  /**
   * 이 setter 함수는 proxy에 새로운 프로퍼티가 설정될 때마다 트리거된다.
   * 이를 통해 새 값이 설정된 프로퍼티가 무엇이며 설정된 새 값은 무엇이고 래핑된 원본 객체가 무엇인지 알 수 있다.
   */
  set( target, key, value ) {
    /**
     * console.log( target ); --> {message: 'Hello!'} - 래핑된 객체
     * console.log( key );    --> message
     * console.log( value );  --> Gary
     */
    if ( key === 'message' ) { // message 프로퍼티를 설정하는 경우
      target.longMessage = value + ' World!';
    }  
    target.meesage = value;
  }
};

const proxy = new Proxy( data, handler );

/**
 * proxy는 data 객체를 첫 번째 인수로서 래핑하고 있기 때문에 proxy를 통해 message에 접근할 수 있다.
 * new Proxy로 생성한 proxy 객체가 message 프로퍼티를 갖기 때문인데 이에 따라 proxy가 래핑하는 data 객체의 message에 proxy도 접근할 수 있는 것이다.
 */
proxy.message = 'Gary';

console.log( proxy.longMessage );