<template>
    <base-card>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResourceMode">Add Resources</base-button>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourcesMode">Stored Resources</base-button>
    </base-card>
    <KeepAlive>
        <component :is="selectedTab"></component>
    </KeepAlive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
    components: {
        StoredResources,
        AddResource,
    },
    data() {
        return {
            storedResources: [
                {
                    id: 'Learn Vue',
                    title: 'Learn Vue 3 - Complete Course',
                    description: 'This course provides a complete guide from scratch to Vue.js',
                    link: 'https://www.vuejs.org',
                }, {
                    id: 'Master Google',
                    title: 'Learn How to Google',
                    description: 'This helps to learn how to google',
                    link: 'https://www.google.com',
                },
            ],
            selectedTab: 'add-resource',
        };
    },
    provide() {
        return {
            resources: this.storedResources,
            addSource: this.addResource,
            deleteSource: this.removeResource,
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(resource) {
            this.storedResources.unshift(resource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(id) {
            const index = this.storedResources.findIndex(r => r.id === id);
            this.storedResources.splice(index, 1);
        }
    },
    computed: {
        addResourceMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        },
        storedResourcesMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        }
    }
}
</script>