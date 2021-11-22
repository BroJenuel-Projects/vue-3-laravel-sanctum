import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('./../views/Login.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./../views/Dashboard/Dashboard.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/Dashboard/Pages/Home.vue'),
            },
            {
                path: '/signin',
                name: 'SignIn',
                component: () => import('../views/Dashboard/Pages/SignIn.vue'),
            },
            {
                path: '/account',
                name: 'Account',
                component: () => import('../views/Dashboard/Pages/Account.vue'),
            },
        ],
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
