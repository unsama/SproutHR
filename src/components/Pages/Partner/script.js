import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"

export default{
    created: function(){
        document.title = this.title;
    },
    data(){
        return{
            title: 'Partner'
        }
    },
    components: {

        Dashboardsetting,
    }
}





