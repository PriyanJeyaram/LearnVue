import {createRouter, createWebHistory} from 'vue-router';

const CoachDetails = () => import('./pages/coaches/CoachDetails.vue');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue');
const ContactCoach = () => import('./pages/requests/ContactCoach.vue');
const RequestsReceived = () => import('./pages/requests/RequestsReceived.vue');
import CoachesList from './pages/coaches/CoachesList.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/coaches', component: CoachesList},
        {path: '/', redirect: '/coaches'},
        {path: '/coaches/:id', component: CoachDetails, props: true, children: [
            {path: 'contact', component: ContactCoach},
        ]},
        {path: '/register', component: CoachRegistration, meta: {requiresAuth: true}},
        {path: '/requests', component: RequestsReceived, meta: {requiresAuth: true}},
        {path: '/auth', component: UserAuth, meta: {requiresUnAuth: true}},
        {path: '/:notFound(.*)', component: NotFound}
    ],
});

router.beforeEach(function(to, _, next) {
    if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    }else if(to.meta.requiresUnAuth && store.getters.isAuthenticated) {
        next('/coaches');
    }else {
        next();
    }
});

export default router;