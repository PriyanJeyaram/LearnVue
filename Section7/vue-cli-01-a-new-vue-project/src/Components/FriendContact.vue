<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend:
            {
                id: 'priyan',
                name: 'Priyan Jeyaram',
                phone: '7010129936',
                email: 'priyan@localhost.com',
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}
</script>
