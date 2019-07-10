import App from '../app.vue';

const home = () => import(/* webpackChunkName: "home" */ '../page/home/home.vue');
const login = () => import(/* webpackChunName: "login" */ '../page/login/login');
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
            }
        ]
    }
]