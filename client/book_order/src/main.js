import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import store from './store';

// Create a new vue3 instance
const app = createApp(App);

console.log('Server URL', process.env.VUE_APP_API_URL);

// Use VueAxios pugin and configure Axios with BaseURL and headers
app.use(VueAxios, axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage?.token}`
    }
}));

// Setup a request interceptor to add the Authorization header with the stored token
app.config.globalProperties.axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, (err) => {
    return Promise.reject(err)
})

// Setup a response interceptor to handle unauthorized(401) response
app.config.globalProperties.axios.interceptors.response.use((res) => {
    return res;
}, (err) => {
    if (err?.response?.status === 401) {
        window.location.href = '/auth/login';
    }
    return Promise.reject(err)
})

// Use the Vuex store
app.use(store);

// Use the Vue Router
app.use(router);

// Mount the vue app to the specified element in the HTML (with id 'app')
app.mount('#app')
