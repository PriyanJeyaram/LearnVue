function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            currentRound: 0,
            monsterHealth: 100,
            playerHealth: 100,
            winner: null,
            battleLog: [],
        }
    },
    computed: {
        monsterHealthBar() {
            if(this.monsterHealth < 0) {
                return 'width: 0%';
            }
            return {width: this.monsterHealth + '%'}
        },
        playerHealthBar() {
            if(this.playerHealth < 0) {
                return 'width: 0%';
            }
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            }else if(this.monsterHealth <= 0) {
                this.winner = 'player'
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            }else if(this.playerHealth <= 0){
                this.winner = 'monster'
            }
        },
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const randValue = getRandomValue(5, 8);
            this.monsterHealth -= randValue;
            this.getBattleLog('player', 'attack', randValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const randValue = getRandomValue(8, 15);
            this.playerHealth -= randValue;
            this.getBattleLog('monster', 'attack', randValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const randValue = getRandomValue(15, 25);
            this.monsterHealth -= randValue;
            this.getBattleLog('player', 'attack', randValue);
            this.attackPlayer();
        },healPlayer() {
            this.currentRound++;
            const randValue = getRandomValue(8, 20);
            if(randValue + this.playerHealth > 100) {
                this.playerHealth = 100;
            }else {
                this.playerHealth += randValue;
            }
            this.getBattleLog('player', 'heals', randValue);
            this.attackPlayer();
        },
        startNewGame() {
            this.currentRound =  0;
            this.monsterHealth= 100;
            this.playerHealth= 100;
            this.winner = null;
            this.battleLog = [];
        },
        surrender() {
            this.winner = 'monster';
        },
        getBattleLog(who, what, value) {
            this.battleLog.unshift({
                actionBy: who,
                actionType: what,
                actionPoint: value,
            });
        }
    }
});

app.mount("#game");