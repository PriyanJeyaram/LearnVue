export default {
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null,
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        },
        token(state) {
            return state.token;
        },
        isAuthenticated(state) {
            return !!state.token;
        }
    },
    actions: {
        async signup(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: 'signup',
            });
        },
        async signin(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: 'signin',
            });
        },
        async auth(context, payload) {
            const mode = payload.mode;
            const FIREBASE_API_KEY = 'AIzaSyCssaut1Er0ezY8yR0mL5sFbWX_3UrlGWM';
            let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
            if (mode === 'signup') {
                url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
            }
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                }),
            });
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || 'Failed to authenticate. Check your login data.');
            }

            localStorage.setItem('token', responseData.idToken);
            localStorage.setItem('userId', responseData.localId);

            context.commit('setUser', {
                userId: responseData.localId,
                token: responseData.idToken,
                tokenExpiration: responseData.expiresIn,
            });
        },
        tryLogin(context) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            if(token && userId){
                context.commit('setUser', {
                    userId: userId,
                    token: token,
                    tokenExpiration: null,
                });
            }
        },
        logout(context) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            context.commit('setUser', {
                userId: null,
                token: null,
                tokenExpiration: null,
            });
        }
    },
    mutations: {
        setUser(state, payload) {
            state.userId = payload.userId;
            state.token = payload.token;
            state.tokenExpiration = payload.tokenExpiration;
        },
    }
}