/** 공격 수치 무작위 출력 */
function getRandomValue( min, max ) {
    return Math.floor( Math.random() * ( max - min ) ) + min;
}

const app = Vue.createApp({
    data() {
        return {
            potatoHealth  : 100,
            snowmanHealth : 100
        }
    },

    computed: {
        potatoHealthStatus() {
            return {  width : `${ this.potatoHealth }%` }
        },
        snowmanHealthStatus() {
            return {  width : `${ this.snowmanHealth }%` }
        }
    },

    methods: {
        /** 감자 공격 당함 */
        attackPotato() {
            const attackValue = getRandomValue( 5, 12 );
            this.potatoHealth -= attackValue;
            this.attackSnowman();
        },

        /** 눈사람 공격 당함 */
        attackSnowman() {
            const attackValue = getRandomValue( 8, 15 );
            this.snowmanHealth -= attackValue;
        },

        /** 눈사람 체력 회복 */
    },
});

app.mount( '#game' );