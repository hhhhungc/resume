import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/plugins/fontawsome'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
