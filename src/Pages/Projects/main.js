import Vue from "vue"
import VueRouter from "vue-router"
import Sortable from 'sortablejs'
import routes from './routes.js'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'




Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VeeValidate);


Vue.directive('sortable', {
    inserted: function (el, binding) {
        new Sortable(el, binding.value || {})
    }
})



const router = new VueRouter({
    mode: 'history',
    routes // short for routes: routes
});


new Vue({
    data: {
        complete: false
    },
    created: function(){
        this.complete = true
    },
    router
}).$mount('#main');

