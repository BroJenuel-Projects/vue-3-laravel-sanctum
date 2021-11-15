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
];

export default createRouter({
    history: createWebHistory(),
    routes
});
