import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);

/** 앱의 여러 곳에서 사용하기 때문에 전역 컴포넌트 */
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
