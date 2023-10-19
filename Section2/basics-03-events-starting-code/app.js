const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  computed: {
    fullName() {
      if(this.name === '') return '';
      return this.name + " " + "Jeyaram";
    }
  },
  watch: {
    counter() {
      const that = this;
      if(this.counter > 50) {
        that.counter = 0;
      }
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    sub(num) {
      this.counter = this.counter - num;
    },
    setName(lastName) {
      this.confirmedName = event.target.value + " " + lastName;
    },
    submitForm() {
      alert("Submitted :)");
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
