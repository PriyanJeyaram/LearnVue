<template>
    <section>Filter</section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button link to="/register">Register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <!-- <li v-for="coach in filteredCoaches" :key="coach.id"> {{ coach.firstName }}</li> -->
                <coachItem 
                v-for="coach in filteredCoaches" 
                :key="coach.id" 
                :id="coach.id" 
                :firstName="coach.firstName"
                :lastName="coach.lastName" 
                :areas="coach.areas" 
                :rate="coach.hourlyRate"></coachItem>
            </ul>
            <h3 v-else>No coaches found</h3>
        </base-card>
    </section>
</template>

<script>
import coachItem from '@/components/coaches/CoachItem.vue';
export default {
    components: {
        coachItem
    },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
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