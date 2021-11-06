import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from "@/assets/js/router";
import store from '@/assets/js/store';
import axios from 'axios';
import mitt from 'mitt';
import './registerServiceWorker'

// createApp(App).use(router).mount('#app')

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.config.globalProperties.emitter = mitt();


app.use(store).use(router).mount('#app');