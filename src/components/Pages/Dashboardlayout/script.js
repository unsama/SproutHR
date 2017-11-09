import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'expenses',
            sidebarData:{
                My_Dashboard: "/dashboards/dashboardspage",

            }
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
        Topcontroller,
        DashboardController,
        Modal

    }

}