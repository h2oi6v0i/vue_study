import { createApp } from 'vue';
/** createRouter 함수를 통해서 Vue 라우터를 생성할 수 있다. */
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

/** 라우터 생성 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/teams', component: TeamsList },
        { path: '/users', component: UsersList },
        { path: '/teams/:teamId', component: TeamMembers }
    ],
    linkActiveClass: 'active-test'
});

const app = createApp(App)

app.use(router);

app.mount('#app');