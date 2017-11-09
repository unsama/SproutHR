import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import Calendar from "./../../partials/Calendar/Calendar.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'inventory',

        }
    },
    components: {
        Sidebar,
        DashboardController,
        Topcontroller,
        Calendar

    }

}