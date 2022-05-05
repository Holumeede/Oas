import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory} from 'vue-router';


import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'
import oasis from './components/oasis.vue'
import Home from './components/oasis.vue';
import personal from './components/personal/personal.vue'

const app = createApp(App);
const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component: Home},
        // {path: './personal', component: personal}
        
    ]
});

app.component('app-oasis', oasis);
app.use(routes);
app.mount('#app')
