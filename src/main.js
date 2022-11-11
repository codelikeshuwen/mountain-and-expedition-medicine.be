import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import HomePage from './components/HomePage.vue';
import ContactPage from './components/ContactPage.vue';
import ForWhoPage from './components/ForWhoPage.vue';
import i18n from './i18n'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/for-who", component: ForWhoPage },
        { path: "/contact", component: ContactPage },
      ],
    
});

const app = createApp(App).use(i18n);
app.use(router);
app.mount( "#app" );


