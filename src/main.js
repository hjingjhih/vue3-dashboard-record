import { createApp } from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';

import App from './App.vue'
import router from './router'



createApp(App).use(router).mount('#app');

createApp(App).use(VueAxios, axios);