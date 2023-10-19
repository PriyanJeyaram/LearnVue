function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            battleLogs: []
        };
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (this.monsterHealth <= 0) {
                this.winner = 'player';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (this.playerHealth <= 0) {
                this.winner = 'monster';
            }
        },
    },
    computed: {
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
        playerHealthBarStyle() {
            if (this.playerHealth < 0) {
                return 'width: 0%';
            } else {
                return { width: this.playerHealth + "%" };
            }
        },
        monsterHealthBarStyle() {
            if (this.monsterHealth < 0) {
                return 'width: 0%';
            } else {
                return { width: this.monsterHealth + "%" };
            }
        },
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const damagePt = getRandomValue(5, 8);
            this.monsterHealth -= damagePt;
            this.getBattleLog('player', 'attack', damagePt);
            this.attackPlayer();
        },
        attackPlayer() {
            const damagePt = getRandomValue(8, 15);
            this.playerHealth -= damagePt;
            this.getBattleLog('monster', 'attack', damagePt);
        },
        specialAttackMonster() {
            this.currentRound++;
            const damagePt = getRandomValue(15, 25);
            this.monsterHealth -= damagePt;
            this.getBattleLog('player', 'attack', damagePt);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healPt = getRandomValue(8, 20);
            if (healPt + this.playerHealth > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healPt;
            }
            this.getBattleLog('player', 'heals', healPt);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        restartGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.battleLogs = [];
        },
        getBattleLog(who, what, value) {
            this.battleLogs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        }
    },
});
app.mount("#game")