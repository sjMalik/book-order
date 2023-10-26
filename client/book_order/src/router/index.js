import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/MyHome';
import Login from '../components/UserLogin';
import Registration from '../components/UserRegistration';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'Registration',
        path: '/registration',
        component: Registration,
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;