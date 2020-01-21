import Vue from 'vue'
import App from './App.vue'
import router from './router'


import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Dialog from 'primevue/dialog';

Vue.use(ToastService);
Vue.use(Dialog);

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Toast', Toast);
Vue.component('Dialog', Dialog);

Vue.config.productionTip = false

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import VueQArt from 'vue-qart'


new Vue({
    components: { VueQArt },
    router,
    render: h => h(App)
}).$mount('#app')