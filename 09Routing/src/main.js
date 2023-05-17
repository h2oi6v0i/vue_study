import { createApp } from 'vue';
/** createRouter 함수를 통해서 Vue 라우터를 생성할 수 있다. */
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

/** 라우터 생성을 위해 JS 객체를 입력한다. */
const router = createRouter({
    history: createWebHashHistory(),
    routes: [ // 사용자가 /teams 라는 경로의 도메인에 방문했을 때 Vue 라우터가 로드해야 하는 컴포넌트
        { path: '/teams', component: TeamsList }, // our-domain.com/teams
        { path: '/users', component: UsersList } 
    ],
}
);

const app = createApp(App)

app.use(router);

app.mount('#app');