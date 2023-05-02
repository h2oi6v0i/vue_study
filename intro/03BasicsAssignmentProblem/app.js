const app = Vue.createApp({
    data() {
        return {
            name   : 'Gary',
            age    : 14,
            random : 0,
            imgSrc : 'https://vitapet.com/media/sz1czkya/benefits-of-getting-a-puppy-900x600.jpg?anchor=center&mode=crop&width=1240&rnd=132503927246630000',
        }
    },

    methods : {
        caculateAge() {
            return this.age + 5;
        },

        makeNumber() {
            const randomNumber = Math.random();
            this.random = randomNumber;
            return this.random;
            /** 
             * return 문을 생략하면, 메서드는 undefined 값을 반환한다.
             * 이 undefined 값은 템플릿 내에서 표시되지 않으므로, <p> 태그에 아무것도 표시되지 않는다.
             */
        }
    },
});

app.mount( '#assignment' );