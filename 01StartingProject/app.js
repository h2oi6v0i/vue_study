Vue.createApp({
    data() {
        return {
            goals        : [],
            enteredValue : '',
        }
    },

    methods: {
        addGoal() {
            this.goals.push( this.enteredValue );
            this.enteredValue = '';
        }
    },
}).mount( '#app' ); // Vue 앱이 페이지의 어느 부분을 건드릴지 알려주는 것

// /**
//  * - 입력된 값을 읽을 수 있도록 input에 접근
//  * - 버튼의 클릭 이벤트 수신하기 위해 button에 접근
//  * - 새로운 목록 항목을 추가하기 위해 ul에 접근
//  */

// const buttonEl = document.querySelector( 'button' );
// const inputEl = document.querySelector( 'input' );
// const listEl = document.querySelector( 'ul' );

// function addGoal() {

//     // input 입력값 
//     const enteredValue = inputEl.value; 

//     const listItemEl = document.createElement('li');

//     // listItemEl의 textContent 속성을 입력된 값으로 설정합니다.
//     listItemEl.textContent = enteredValue;

//     // listEl에 listItemEl을 추가합니다.
//     listEl.appendChild(listItemEl);

//     // input 입력값 초기화
//     inputEl.value = '';
// }

// buttonEl.addEventListener( 'click', addGoal );