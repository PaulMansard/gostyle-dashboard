import Vue from 'vue'
import App from './App.vue'
import router from './router'


import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Menubar from 'primevue/menubar';

Vue.use(ToastService);

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Toast', Toast);
Vue.component('Menubar', Menubar);

Vue.config.productionTip = false

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import VueQArt from 'vue-qart'
import vuetify from './plugins/vuetify';


new Vue({
    components: { VueQArt },
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
