<template>
    <section>
        <base-card>
            <header><h2>Requests Received</h2></header>
            <ul v-if="hasRequests">
                <request-item v-for="req in requests" 
                    :key="req.id" 
                    :email="req.userEmail"
                    :message="req.message">
                </request-item>
            </ul>
            <h3 v-else>No Requests Received</h3>
        </base-card>
    </section>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem.vue';
export default {
    components: {
        RequestItem
    },
    computed: {
        requests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        }
    }
};
</script>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>