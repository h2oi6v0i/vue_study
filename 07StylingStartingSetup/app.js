const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },

    methods: {
        /** 토글 */
        boxSelected( box ) {
            if ( box === 'A' ) {
                this.boxASelected = !this.boxASelected;
            } else if ( box === 'B' ) {
                this.boxBSelected = !this.boxBSelected;
            } else if ( box === 'C' ) {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    },
});

app.mount( '#styling' );

/**
 * HTML 설명
 * 해당 프로퍼티 이름은 CSS 클래스를 반영하고
 * 그 프로퍼티의 값은 true/false를 판단하여 class의 추가 여부를 보여준다.
 */