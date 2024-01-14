import Vue from 'vue';
import VueRouter from 'vue-router'




import Index from '../components/Index.vue'
import Login from '../components/login.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../components/login.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: Index,
    },



]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;