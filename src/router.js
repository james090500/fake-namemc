import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import FakePage from './views/FakePage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/:user', props: true, component: FakePage },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
