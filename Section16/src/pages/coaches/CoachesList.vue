<template>
    <base-dialog 
    :show="!!error" 
    title="Error Occurred, Do something useful!"
    @close="handleError"
    >
        {{ error }}
    </base-dialog>
    <coach-filter @change-filter="setFilter"></coach-filter>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
                <base-button link to="/register" v-if="!isLoading && !isCoach">Register as Coach</base-button>
            </div>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <ul v-else-if="hasCoaches">
                <!-- <li v-for="coach in filteredCoaches" :key="coach.id"> {{ coach.firstName }}</li> -->
                <coachItem v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName"
                    :lastName="coach.lastName" :areas="coach.areas" :rate="coach.hourlyRate"></coachItem>
            </ul>
            <h3 v-else>No coaches found</h3>
        </base-card>
    </section>
</template>

<script>
import coachItem from '@/components/coaches/CoachItem.vue';
import coachFilter from '@/components/coaches/CoachFilter.vue';

export default {
    components: {
        coachItem,
        coachFilter,
    },
    data() {
        return {
            error: null,
            isLoading: false,
            activeFilters: {
                frontend: true,
                backend: true,
                career: true,
            },
        };
    },
    computed: {
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                } if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                } if (this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                }
                return false;
            });
        },
        hasCoaches() {
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        },
    },
    methods: {
        setFilter(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
        async loadRequests() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('coaches/loadCoaches');
            } catch (error) {
                this.error = error.message || 'Something went wrong';
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        },
    },
    created() {
        this.loadRequests();
    },
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>