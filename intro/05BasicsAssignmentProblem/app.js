const app = Vue.createApp({
    data() {
        return {
            message         : '이벤트 과제입니다!',
            output          : 'output',
            confirmedOutput : 'output',
        }
    },

    methods: {
        showAlert() {
            alert( this.message );
        },

        printOutput( event ) {
            this.output = event.target.value;
        },

        confirm() {
            this.confirmedOutput = this.output;
        }
    },

});

app.mount( '#assignment' );
