import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Dialog from "primevue/dialog";
import Menubar from "primevue/menubar";
import "primevue/resources/themes/nova-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import Listbox from "primevue/listbox";
import VueQArt from "vue-qart";

Vue.use(Dialog);
Vue.use(ToastService);

new Vue({
    components: { VueQArt }
});
Vue.component("InputText", InputText);
Vue.component("Listbox", Listbox);
Vue.component("Button", Button);
Vue.component("ToastService", ToastService);
Vue.component("Toast", Toast);
Vue.component("Dialog", Dialog);
Vue.component("Menubar", Menubar);

Vue.config.productionTip = false;

new Vue({
    components: { VueQArt },
    router,
    render: h => h(App)
}).$mount("#app");