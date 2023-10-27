<template>
    <ul>
        <learning-resource 
        v-for="src in resources" 
        :title="src.title"
        :id="src.id"
        :description="src.description"
        :link="src.link"
        :key="src.id"></learning-resource>
    </ul>
</template>

<script>
import LearningResource from './LearningResources.vue';
export default {
    components: {
        LearningResource
    },
    inject: ['resources'],
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>