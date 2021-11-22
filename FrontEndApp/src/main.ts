import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';
import 'virtual:windi.css';
import 'boxicons/css/boxicons.min.css';
import './assets/main.scss'

createApp(App).use(router).use(store).mount('#app');
