<template>
    <form @submit.prevent="addNewContact">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName" required>
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone" required>
        </div>
        <div>
            <label>E-mail</label>
            <input type="email" v-model="enteredEmail" required>
        </div>
        <div>
            <button>Add New Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
        }
    },
    emits: ['add-friend'],
    methods: {
        addNewContact() {
            this.$emit('add-friend', {
                id: new Date().toString(),
                name: this.enteredName,
                phone: this.enteredPhone,
                email: this.enteredEmail,
                isFavorite: false,
            });
            this.enteredName = '';
            this.enteredPhone = '';
            this.enteredEmail = '';
        }
    }
}
</script>