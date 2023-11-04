import { createStore } from 'vuex';

import prodsModule from './modules/product.js';
import cartModule from './modules/cart.js';

const store = createStore({
    modules: {
        prods: prodsModule,
        cart: cartModule,
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        },
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn;
        },
    },
});

export default store;