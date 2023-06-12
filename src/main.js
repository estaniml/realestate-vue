import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.scss';
import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBuilding, faChevronCircleDown, faHouse, faLocation, faLocationPin, faMagnifyingGlass, faSignOut, faTree, faUmbrellaBeach, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const firebaseConfig = {
    apiKey: "AIzaSyAxMhsa16OmmQ25B_cioSdZlIWpRL-dmfw",
    authDomain: "vue-estate.firebaseapp.com",
    projectId: "vue-estate",
    storageBucket: "vue-estate.appspot.com",
    messagingSenderId: "1086896195104",
    appId: "1:1086896195104:web:87b414415ad657f70c1e45"
};


library.add(faBuilding, faMagnifyingGlass, faGoogle, faGithub, faHouse, faBuilding, faLocation, faUmbrellaBeach, faLinkedin, faChevronCircleDown, faTree, faLocationPin, faSignOut, faLocationDot)

initializeApp(firebaseConfig);

export const db = getFirestore(initializeApp(firebaseConfig));

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')