import dSidebar from "./../../partials/dSidebar/dSidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    
    components: {
        dSidebar,
        Dashboardsetting,
        Topcontroller,
        DashboardController

    }

}