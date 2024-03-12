import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/MyHome';
import Login from '../components/auth/UserLogin';
import Registration from '../components/auth/UserRegistration';
import EmailVerification from '../components/auth/EmailVerification';
import Workspace from '@/components/Workspace.vue';
import AdminLayout from '../components/admin/AdminLayout.vue';
import AddBook from '../components/admin/AddBook.vue';
import ListBook from '../components/admin/ListBook.vue';
import AuthLayout from '@/components/auth/AuthLayout'

const routes = [
    {
        path: '/',
        component: Workspace,
        children: [
            {
                name: 'Home',
                path: '/',
                component: Home
            },
            {
                path: 'admin',
                component: AdminLayout,
                children: [
                    {
                        name: 'AddBook',
                        path: 'addbooks',
                        component: AddBook
                    },
                    {
                        name: 'ListBook',
                        path: 'books',
                        component: ListBook
                    }

                ]
            }
        ]
    },
    {
        path: '/auth',
        component: AuthLayout,
        children: [

            {
                name: 'Registration',
                path: 'registration',
                component: Registration,
            },
            {
                name: 'Login',
                path: 'login',
                component: Login,
            },
            {
                name: 'VerifyEmail',
                path: 'verify-email',
                component: EmailVerification,
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;