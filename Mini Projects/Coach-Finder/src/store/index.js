import {createStore} from 'vuex';

import coachesModule from './modules/coaches.js';
import requestsModule from './modules/request.js';
import authModule from './modules/auth.js';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
        auth: authModule
    },
});

export default store;