import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/users', 
            components: {default: UsersList, footer: UsersFooter}, 
        },
        { name: 'teams', path: '/', redirect: '/teams' },
        {
            path: '/teams',
            components: {default: TeamsList, footer: TeamsFooter},
            children: [
                { name: 'team-members', path: ':tID', component: TeamMembers, props: true },
            ],
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});
router.beforeEach((to, from, next) => {
    console.log('Global beforeEach');
    console.log(to, from);
    next();
});

export default router;