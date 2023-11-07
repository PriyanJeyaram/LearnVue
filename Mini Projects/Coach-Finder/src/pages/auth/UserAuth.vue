<template>
    <div>
        <base-dialog :show="!!error" title="An Error Occurred" @close="error = null">
            <p>{{ error }}</p>
        </base-dialog>
        <base-dialog :show="isLoading" title="Authenticating..." fixed>
            <base-spinner></base-spinner>
        </base-dialog>
        <base-card>
            <form @submit.prevent="submitAuthData">
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model.trim="email" />
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model.trim="password" />
                </div>
                <p v-if="!formIsValid">Please enter a valid email and password (at least 6 characters long).</p>
                <base-button>{{ submitButtonCaption }}</base-button>
                <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchButtonCaption }}</base-button>
            </form>
        </base-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'signin',
            isLoading: false,
            error: null
        }
    },
    computed: {
        switchButtonCaption() {
            return this.mode === 'signin' ? 'Switch to Sign Up' : 'Switch to Sign In';
        },
        submitButtonCaption() {
            return this.mode === 'signin' ? 'Sign In' : 'Sign Up';
        }
    },
    methods: {
        async submitAuthData() {
            // Initially to avoid the error message
            this.formIsValid = true;
            // Form validation logic
            if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }
            // Send data to the backend
            const authData = {
                email: this.email,
                password: this.password
            }

            this.isLoading = true;
            try {
                // send Http
                if (this.mode === 'signup') {
                    // For Sign Up
                    await this.$store.dispatch('signup', authData);
                } else {
                    // For Sign In
                    await this.$store.dispatch('signin', authData);
                }
                const redirectURL = '/' + (this.$route.query.redirect || 'coaches');
                this.$router.replace(redirectURL);
            } catch (error) {
                this.error = error.message || 'Failed to authenticate. Check your login data.';
            }
            this.isLoading = false;

        },
        switchAuthMode() {
            this.mode === 'signin' ? this.mode = 'signup' : this.mode = 'signin';
        }
    }
}
</script>

<style scoped>
form {
    margin: 1rem;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}
</style>
