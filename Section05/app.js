const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
      msg: 'This is another msg',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
    setUserText() {
      this.msg = this.$refs.userText.value;
    },
  },
  // Life Cycle of Vue Instance
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("Updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount('#app');

// Unmounting
setTimeout(function() {
  app.unmount();
},900000);

// JS Proxy
const data = {
  message: 'hello',
};

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
  }
};

const proxy = new Proxy(data, handler);
proxy.message = 'Helloooooooo :)';
