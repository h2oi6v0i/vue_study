const app = Vue.createApp({
    data() {
        return {
            // 친구에 대한 배열 안에 각 친구는 객체로 나타낸다.
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
})

/**
 * 컴포넌트
 * 기본적인 틀은 app.component( '이름', { 내용 } ) 이다.
 * 여기서 '이름'은 html과 충돌이 일어나지 않도록 두 단어 이상으로 작명해야 한다.
 * 컴포넌트는 연결된 데이터와 로직을 포함한 재사용 가능한 HTML 코드이다!
 */
app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Show ' : 'Hide ' }}Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>`,

    data() {
        return {
            detailsAreVisible : false,
            friend :  {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            },
        }
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
})

app.mount('#app');