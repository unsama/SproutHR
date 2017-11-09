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
        title: 'Manufacturing',
        sidebarData: {

            Operations: [
                {
                    url: "/manufacturing",
                    title: "Manufacturing Orders"
                },
                {
                    url: "/manufacturing/unbuild_order",
                    title: "Unbuild Orders"
                },
                {
                    url: "/manufacturing/manufacturing_scrap",
                    title: "Scrap"
                },
                {
                    url: "/manufacturing/manufacturing_workload",
                    title: "Workorder Messages"
                },

            ],
            MasterData: [
                {
                    url: "/manufacturing/manufacturing_product",
                    title: "Products"
                },
                {
                    url: "/manufacturing/manufacturing_bills",
                    title: "Bill of Material"
                },

            ],
            Reporting:[
                {
                    url: "/manufacturing/manufacturing_order_pivot",
                    title: "Manufacturing Orders"
                },
            ],
            Configuration:[
                {
                    url: "/manufacturing/manufacturing_settings",
                    title: "Settings"
                },

            ],
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