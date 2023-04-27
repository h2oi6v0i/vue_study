const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue  : '',
            taskList          : [],
            taskListIsVisible : true, /** 목록 shown/hidden 설정 */
        }
    },

 
    computed: {
        buttonCaption() {
            /** 내 풀이 */
            // if ( this.taskListIsVisible === true ) {
            //     return "Hide";
            // } else {
            //     return "Show";
            // }

            /** 쌤 풀이 */
            return this.taskListIsVisible ? 'Hide' : 'Show';
        }
    },

    methods: {
        addTask() {
            this.taskList.push( this.enteredTaskValue );
            /** 초기화 맞는지 확인 */
            this.enteredTaskValue = '';
        },

        toggleTaskList() {
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    },
});

app.mount( '#assignment' );