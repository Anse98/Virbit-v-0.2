import { createApp } from 'vue'
import { router } from './router'
import './style/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWandMagicSparkles, faRocket, faPhone, faRankingStar, faEnvelopesBulk, faChevronRight, faChevronLeft, faLocationDot, faEnvelopeOpen, faFileLines, faCashRegister, faTowerBroadcast, faServer, faGears, faPersonChalkboard, faShieldHalved, faNetworkWired, faCode, faGlobe, faMobileScreenButton, faVault, faPaperPlane, faCaretRight, faLightbulb, faBars, faXmark, faExclamation, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'

library.add(faWandMagicSparkles, faRocket, faPhone, faRankingStar, faEnvelopesBulk, faChevronRight, faChevronLeft, faLocationDot, faEnvelopeOpen, faFileLines, faCashRegister, faTowerBroadcast, faServer, faGears, faPersonChalkboard, faShieldHalved, faNetworkWired, faCode, faGlobe, faMobileScreenButton, faVault, faPaperPlane, faCaretRight, faLightbulb, faBars, faXmark, faExclamation, faCaretUp)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
