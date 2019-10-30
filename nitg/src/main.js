import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import './scss/app.scss'

import BackToTop from 'vue-backtotop'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faXing, faTelegramPlane, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faInstagram);
library.add(faAngleUp);
library.add(faXing);
library.add(faLinkedinIn);
library.add(faFacebookF);
library.add(faPhone);
library.add(faEnvelope);
library.add(faTelegramPlane);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue)
Vue.use(BackToTop)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
