const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish Vue Course :)',
            courseGoalB: 'Build Amazing Projects',
            courseGoalC: '<h1>Push to Github</h1>',
            courseLink: 'https://vuejs.org/guide/introduction.html'
        };
    },
    methods: {
        printGoal() {
            const rand = Math.random();
            return (rand > 0.5)? this.courseGoalA:this.courseGoalC;
        }
    }
});
app.mount('#user-goal');