import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBuilding, faHouse, faLocation, faMagnifyingGlass, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faBuilding, faMagnifyingGlass, faGoogle, faGithub, faHouse, faBuilding, faLocation, faUmbrellaBeach, faLinkedin)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')