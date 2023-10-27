<template>
    <h2> Manage Component </h2>
    <input type="text" ref="goal">
    <button @click="addGoal"> Add Goal </button>
    <teleport to="body">
        <error-alert v-if="inputIsInvalid">
            <h2>Invalid Goal</h2>
            <p> Please enter a valid goal! </p>
            <button @click="inputIsInvalid = false"> Okay </button>
        </error-alert>
    </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';


export default {
    components: {
        ErrorAlert,
    },
    data() {
        return {
            inputIsInvalid: false,
        };
    },
    methods: {
        addGoal() {
            const goal = this.$refs.goal.value;
            if (goal === '') {
                this.inputIsInvalid = true;
            }
        },
    },
}
</script>