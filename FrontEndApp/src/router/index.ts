import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('./../views/Home.vue'),
    },
    {
        path: "/signin",
        name: "SignIn",
        component: () => import('./../views/SignIn.vue'),
    },
    {
        path: "/account",
        name: "Account",
        component: () => import('./../views/Account.vue'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
});
