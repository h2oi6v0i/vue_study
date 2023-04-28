function getRandomValue( min, max ) {
    return Math.floor( Math.random() * ( max - min ) ) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth  : 100,
            monsterHealth : 100
        }
    },

    computed: {
        monsterBarStyles() {
            return { width : this.monsterHealth + '%' };
        },

        playerBarStyles() {
            return { width : this.playerHealth + '%' };
        },
    },


    methods: {
        /** 몬스터 공격하기 */
        attackMonster() {
            const attackValue = getRandomValue( 5, 12 );
            this.monsterHealth -= attackValue; 
            /** attackMonster가 발생하면 바로 attackPlayer가 트리거 되어야 한다. */
            this.attackPlayer(); // 모든 methods를 다 연결해야하는 건 아니라는 걸 배웠다.
        },

        /** 플레이어 공격 당함 */
        attackPlayer() {
            const attackValue = getRandomValue( 8, 15 );
            this.playerHealth -= attackValue;
        }
    },
});

app.mount( '#game' );

 /**
   * 피해량은 최소 5 최대 12
   * Math.floor() : 소수점 아래 숫자 버림
   * 마지막에 최솟값 다시 더하면 5~12 사이 임의의 숫자 산출 가능
   */


 /**
  * this 쓰는 이유
  * 데이터가 통합되어서 내부에서 관리되는 전역 객체가 되기 때문이다.
  * methods, computed도 마찬가지이다.
  */