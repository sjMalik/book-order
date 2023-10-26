import { createApp } from 'vue';
// import VueSweetalert2 from 'vue-sweetalert2';

import App from './App.vue';
import router from './router';

createApp(App)
    // .use(VueSweetalert2)
    .use(router)
    .mount('#app')
