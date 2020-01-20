import Vue from 'vue'
import App from './App.vue'
import router from './router'


import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

Vue.use(ToastService);

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Toast', Toast);

Vue.config.productionTip = false

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')