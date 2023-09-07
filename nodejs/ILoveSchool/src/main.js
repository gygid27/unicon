import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VueSession from 'vue-session/index'

var sessionOption = {
  persist: true
}

const firebaseConfig = {
  apiKey: 'AIzaSyAkXhMnIWsZ5jx_Jnbxdkx9iN4Ahn4S6sE',
  authDomain: 'ilovefamily-3b230.firebaseapp.com',
  projectId: 'ilovefamily-3b230',
  storageBucket: 'ilovefamily-3b230.appspot.com',
  messagingSenderId: '725977488169',
  appId: '1:725977488169:web:c32881019ba7c7855bb538',
  measurementId: 'G-642NT18KRE'
}

firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
