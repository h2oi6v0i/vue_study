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
        },
        increase( state, payload ) {
            state.counter += payload.value;
        }
    },

    getters: {
        finalCounter( state ) {
            return state.counter * 3;
        },

        /** 첫 번째 인수는 필요 없지만 두 번째 인수는 필요할 때 _ 사용 */
        normalizedCounter(_, getters ) {
            // const finalCounter = state.counter * 3;
            const finalCounter = getters.finalCounter;
            if ( finalCounter < 0 ) {
                return 0;
            } 
            if ( finalCounter > 100 ) {
                return 100;
            }
            return finalCounter;
        }
    }
});

const app = createApp( App );

/** app.use를 호출해서 저장소를 전달한다. */
app.use( store );

app.mount( '#app' );
