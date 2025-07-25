import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router configuration
// main.js or main.ts
import './assets/main.css'

const app = createApp(App);

app.use(router); // Tell Vue to use the router

app.mount('#app');