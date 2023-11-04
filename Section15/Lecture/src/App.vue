<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter></the-counter>
    <fav-value></fav-value>
    <button @click="increase({ value: 10 })">Increase</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="User Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';
import FavValue from './components/FavValue.vue';
import { mapGetters, mapActions } from 'vuex';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavValue,
    UserAuth,
  },
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // },
    ...mapGetters('numbers', ['counter']),
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    ...mapActions('numbers', ['increase']),
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>