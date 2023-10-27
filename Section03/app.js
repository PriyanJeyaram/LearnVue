const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeGoal(id) {
      this.goals.splice(id, 1);
    },
  },
});

app.mount('#user-goals');
