import { createApp } from 'vue'
// import './style.css'
import App from './App.vue';
import bootstrap from 'bootstrap';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);
import store from './store';
import router from './router/router';
import './assets/main.css'

createApp(App)
    .use(bootstrap)
    .use(store)
    .use(router)
    .mount('#app')
