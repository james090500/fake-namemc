import { createApp } from 'vue'
import FakeNameMC from './FakeNameMC.vue'

const app = createApp(FakeNameMC)

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faSun,
    faMoon,
    faSearch,
    faPlay,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

library.add(faSun, faMoon, faSearch, faPlay, faArrowRight)

app.component('FontAwesomeIcon', FontAwesomeIcon)

// Router
import Router from './router.js'
app.use(Router)

app.mount('#app')
