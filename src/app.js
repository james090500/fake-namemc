import { createApp } from 'vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
import FakeNameMC from './FakeNameMC.vue'

const app = createApp(FakeNameMC)

/* import the fontawesome core */
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

app.mount('#app')
