import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'MyHome',
        component: () => import('@/components/MyHome.vue'),
    },
    { path: '/login', name: 'SdmLogin', component: () => import('@/components/SdmLogin.vue') },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
