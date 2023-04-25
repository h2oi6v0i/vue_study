const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },

    computed: {
        boxAClasses() {
            return {'is-active': this.boxASelected};
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