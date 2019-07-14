import App from '../app.vue';

const home = () => import(/* webpackChunkName: "home" */ '../page/home/home.vue');
const login = () => import(/* webpackChunkName: "login" */ '../page/login/login');
const forget = () => import(/* webpackChunkName: "forget" */ '../page/forget/forget');
const profile = () => import(/* webpackChunkName: "profile" */ '../page/profile/profile');

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                redirect: '/home'
            },
            {
                path: '/home',
                component: home
            },
            {
                path: '/login',
                component: login
            },
            {
                path: '/forget',
                component: forget
            },
            {
                path: '/profile',
                component: profile,
            }
        ]
    }
]