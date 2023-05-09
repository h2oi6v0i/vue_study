import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

/** 앱의 여러 곳에서 사용하기 때문에 전역 컴포넌트 */
app.component('base-badge', BaseBadge);

app.mount('#app');
