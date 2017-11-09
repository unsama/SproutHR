import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'inventory',
            sidebarData: {
                Dashboard: "/maintenance/maintenancedashboard",
                Maintenance: [
                    {
                        url: "/maintenance/maintenancerequest",
                        title: "Maintenance Requests"
                    },
                    {
                        url: "/maintenance/maintenancecalendar",
                        title: "Maintenance Calendar"
                    },
                ],
                Equipments: "/maintenance/maintenanceequipments",



            }
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
        Topcontroller,
        DashboardController

    }

}