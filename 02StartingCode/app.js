/**
 * 앱을 구성할 때 createApp에 객체를 전달해서 여러 옵션을 사용할 수 있다.
 */
const app = Vue.createApp({
    data() {
        return {
            courseGoalA : 'Finish the course and learn Vue!',
            courseGoalB : '<span>Master Vue and build amazing apps!</span>',
            vueLink     : 'https://vuejs.org/'

        } // 항상 객체를 반환한다. 
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random(); // 0~1 무작위 숫자 반환
            if ( randomNumber < 0.5 ) {
                return this.courseGoalA;
                /**
                 * return courseGoalA; 라고 쓰면 안 되는 이유
                 * 이렇게 입력하면 JavaScript는 courseGoalA란 이름의 변수나 상수를 찾을 텐데
                 * courseGoalA는 변수도 상수도 아니기 때문에 찾을 수 없다.
                 * courseGoalA는 data 객체의 property이다!
                 * this 키워드를 사용하면 전역 Vue 인스턴스 객체에 저장된 모든 데이터에 접근할 수 있다.
                 */
            } else {
                return this.courseGoalB;
            }

        }
    },
});

app.mount( '#user-goal' );