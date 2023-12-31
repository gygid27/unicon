import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'MyHome',
        component: () => import('@/components/MyHome.vue'),
    },
    { path: '/login', name: 'SdmLogin', component: () => import('@/components/SdmLogin.vue') },
    {
        path: '/sign',
        name: 'SdmSign',
        component: () => import('@/components/SdmSign.vue'),
    },

    {
        path: '/qs',
        name: 'SdmQuestion',
        component: () => import('@/components/SdmQuestion.vue'),
    },

    {
        path: '/dress',
        name: 'SdmDress',
        component: () => import('@/components/SdmDress.vue'),
    },
    {
        path: '/makeup',
        name: 'SdmMake',
        component: () => import('@/components/SdmMake.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
