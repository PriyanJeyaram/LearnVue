<template>
    <teleport to="body">
        <base-dialog v-if="isInputInvalid" title="Invalid Input" @close="isInputInvalid = false">
            <template #default>
                <p>Please enter a valid title, description and link!</p>
            </template>
            <template #actions>
                <base-button @click="isInputInvalid = false">OK</base-button>
            </template>
        </base-dialog>
    </teleport>
    <base-card>
        <form @submit.prevent="addResource">
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" ref="title" />
            </div>
            <div>
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" ref="desc"></textarea>
            </div>
            <div>
                <label for="link">Link</label>
                <input type="url" id="link" name="link" ref="link" />
            </div>
            <br>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    inject: ['addSource'],
    data() {
        return {
            isInputInvalid: false,
        }
    },
    methods: {
        addResource() {
            const resource = {
                id: new Date().toISOString(),
                title: this.$refs.title.value,
                description: this.$refs.desc.value,
                link: this.$refs.link.value
            };
            if (resource.title.trim() === '' || resource.description.trim() === '' || resource.link.trim() === '') {
                this.isInputInvalid = true;
                return;
            }
            this.addSource(resource);
        }
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>