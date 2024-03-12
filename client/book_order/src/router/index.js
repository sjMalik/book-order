import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/MyHome';
import Login from '../components/auth/UserLogin';
import Registration from '../components/auth/UserRegistration';
import EmailVerification from '../components/auth/EmailVerification';
import Workspace from '@/components/Workspace.vue';
import User from '@/models/User';
import AdminLayout from '@/components/admin/AdminLayout.vue';
import AddBook from '@/components/admin/AddBook.vue';
import ListOfBook from '@/components/admin/ListOfBook.vue';
import AuthLayout from '@/components/auth/AuthLayout.vue';

const routes = [
    {
        path: '/',
        component: Workspace,
        children: [
            {
                name: 'Home',
                path: '',
                component: Home,
                meta: { requiresAuth: true }
            },
            {
                path: 'admin',
                component: AdminLayout,
                children: [
                    {
                        name: 'add-books',
                        path: 'addbooks',
                        component: AddBook,
                        meta: { requiresAuth: true }
                    },
                    {
                        name: 'list-books',
                        path: 'books',
                        component: ListOfBook,
                        meta: { requiresAuth: true }
                    }
                ]

            },
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

// Navigation guard to check authentication status
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let user = User.from(localStorage.token);
        console.log(user)
        // Check if user is authenticated
        if (!user) {
            // If not authenticated, redirect to login page
            next({ name: 'Login' });
        } else {
            // If authenticated, continue to the requested route
            next();
        }
    } else {
        // If route doesn't require authentication, continue as usual
        next();
    }
});

export default router;