function getRandomValue( min, max ) {
    return Math.floor( Math.random() * ( max - min ) ) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth  : 100,
            monsterHealth : 100,
            currentRound  : 0,
            winner        : null, // JS에서 false로 취급함
        }
    },

    computed: {
        monsterBarStyles() {
            return { width : this.monsterHealth + '%' };
        },

        playerBarStyles() {
            return { width : this.playerHealth + '%' };
        },

        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },

    /**
     * 이렇게 검사만 하는 건 소용없고, 화면에 반영할 수 있게 바꿔야 한다.
     * -> data()에 담기!
     */
    watch: {
        /** data()의 playerHealth를 감시 */
        playerHealth( value ) {
            if ( value <= 0 && this.monsterHealth <= 0 ) {
                this.winner = 'draw';
            } else if ( value <= 0 ) {
                this.winner = 'monster';
            }
        },

        /** data()의 monsterHealth 감시 */
        monsterHealth( value ) {
            if ( value <= 0 && this.playerHealth <= 0 ) {
                this.winner = 'draw';
            } else if ( value <= 0 ) {
                this.winner = 'player';
            }
        },
    },


    methods: {
        /**
         * 몬스터 공격하기
         */
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue( 5, 12 );
            this.monsterHealth -= attackValue; 

            /**
             * attackMonster가 발생하면 바로 attackPlayer가 트리거 되어야 한다.
             * 모든 methods를 다 HTML에 연결해야하는 건 아니다!
             */
            this.attackPlayer();
        },

        /**
         * 플레이어 공격 당함
         */
        attackPlayer() {
            const attackValue = getRandomValue( 8, 15 );
            this.playerHealth -= attackValue;
        },

        /**
         * 몬스터 스페셜 공격하기
         * - 3턴마다 한 번씩 공격 가능
         * - 공격 불가능할 땐 버튼 비활성화
         */
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue( 10, 25 );
            this.monsterHealth -= attackValue; 
            this.attackPlayer();
        },

        /**
         * 플레이어 체력 회복
         * - 회복 기능 사용도 게임의 턴으로 집계된다.
         * - 회복한 경우, 몬스터가 플레이어 공격한다.
         */
        healPlayer() {
            this.currentRound++;

            const healValue = getRandomValue( 8, 20 );

            /** 100까지만 체력 회복 가능 */
            if ( this.playerHealth + healValue > 100 ) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }

            this.attackPlayer();
        }
    },
});

app.mount( '#game' );

 /**
  * this 쓰는 이유
  * 데이터가 통합되어서 내부에서 관리되는 전역 객체가 되기 때문이다.
  * methods, computed도 마찬가지이다.
  */

      /**
             * 피해량은 최소 5 최대 12
             * Math.floor() : 소수점 아래 숫자 버림
             * 마지막에 최솟값 다시 더하면 5~12 사이 임의의 숫자 산출 가능
             */