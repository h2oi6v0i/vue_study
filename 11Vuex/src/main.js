import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },

    mutations: {
        increment( state ) {
            state.counter += 2;
        }
    }
});

const app = createApp( App );

/** app.use를 호출해서 저장소를 전달한다. */
app.use( store );

app.mount( '#app' );
