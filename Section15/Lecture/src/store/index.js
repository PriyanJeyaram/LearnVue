import { createStore } from 'vuex';
import counterModule from './modules/counter/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
    modules: {
        numbers: counterModule,
        auth: authModule,
    },
});

export default store;