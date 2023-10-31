<template>
  <ul>
    <button @click="this.$router.push('/teams')"> Programmatically Routing </button>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  // methods: {
  //   confirm() {
  //     this.$router.push('/teams');
  //   },
  // },
  inject: ['users'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>