import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = Vue.createApp();
app.use(VueAxios, axios)
createApp(App).use(axios).use(VueAxios).use(router).mount('#app')