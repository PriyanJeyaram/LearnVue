<template>
    <button v-if="!userIsAuthenticated" @click="login">login</button>
    <button v-else @click="logout">logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['userIsAuthenticated']),
    },
    methods: {
        ...mapActions(['login', 'logout']),
    },
};
</script>