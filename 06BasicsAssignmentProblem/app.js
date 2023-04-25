const app = Vue.createApp({
    data() {
        return {
            number: 0,
        }
    },

    computed: {
        result() {
            if ( this.number < 37 ) {
                return 'Not there yet!';
            } else if ( this.number === 37 ) {
                return this.number;
            } else {
                return 'Too much!';
            }
        }
    },


    watch: {
        number() {
            const that = this;
            setTimeout( function() {
                that.number = 0;
            }, 2000 );
        }
    },

    methods: {
        addNum( num ) {
            this.number = this.number + num;
        }
    },
})

app.mount( '#assignment' );