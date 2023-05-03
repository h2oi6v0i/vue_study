/**
 * 패키지에서 불러올 땐 경로 안 적고 이름만 적는다.
 */
import { createApp } from 'vue';

/**
 * 식별자 작명 자유지만 보통 파일명과 동일하게 정한다. (App)
 * 그래서 이렇게 import 할 때마다 해당 default 겍체✨를 불러온다.
 */
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

const app = createApp( App );

app.component( 'friend-contact', FriendContact );

app.mount( '#app' );
