<template>
    <base-card>
        <h2>Coach Registration</h2>
        <coach-form @save-data="saveData"></coach-form>
    </base-card>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm,
    },
    methods: {
        saveData(coachData) {
            this.$store.dispatch('coaches/registerCoach', coachData);
            this.$router.replace('/coaches');
        },
    },
};
</script>