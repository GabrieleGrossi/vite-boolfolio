import { createRouter, createWebHistory } from "vue-router";

import HomePageVue from "./pages/HomePage.vue";
import HomePage from './pages/HomePage.vue';
import Projects from './pages/Projects.vue';
import SingleProject from './pages/SingleProject.vue';

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/homepage',
            name:'homepage',
            component:'HomePage',
        },
        {
            path:'/projects',
            name:'projects.index',
            component:'Projects',
        },
        {
            path:'/projects/show',
            name:'projects.show',
            component:'SingleProject',
        }
    ]
})

export {router};