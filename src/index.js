import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import home from './page/home/home.vue';
import store from './store/index';
import routes from './router/router';
import {routerMode} from './config/env';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: routerMode
});

new Vue({
    store,
    router,
    render(h) {
        return h(App);
    }
}).$mount('#app')