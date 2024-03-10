import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

console.log('Server URL', process.env.VUE_APP_API_URL);

app.use(VueAxios, axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.token
    }
}));

app.config.globalProperties.axios.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, function (error) {
    return Promise.reject(error)
});

app.config.globalProperties.axios.interceptors.response.use((res) => {
    return res;
}, function (error) {
    if (error.response && error.response.status === 401) {
        window.location.href = "/auth/login";
        console.log(error.response.status);
    }
    return Promise.reject(error)
});

app.use(store);
app.use(router);
app.mount('#app')
