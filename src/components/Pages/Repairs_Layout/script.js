import DashboardController from "./../../partials/DashboardController/DashboardController.vue"


export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Repairs',

        }
    },
    components: {

        DashboardController,
       

    }

}