<template>
    <div>
        <base-dialog :show="!!error" title="Error Occurred, Do something useful!" @close="handleError">{{ error
        }}</base-dialog>
        <section>
            <base-card>
                <header>
                    <h2>Requests Received</h2>
                </header>
                <base-spinner v-if="isLoading"></base-spinner>
                <ul v-else-if="!this.isLoading && hasRequests">
                    <request-item v-for="req in requests" :key="req.id" :email="req.userEmail" :message="req.message">
                    </request-item>
                </ul>
                <h3 v-else>No Requests Received</h3>
            </base-card>
        </section>
    </div>
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
    },
    created() {
        this.loadRequests();
    },
    data() {
        return {
            error: null,
            isLoading: false,
        };
    },
    methods: {
        async loadRequests() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('requests/fetchRequests');
            } catch (error) {
                this.error = error.message || 'Something went wrong';
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        },
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