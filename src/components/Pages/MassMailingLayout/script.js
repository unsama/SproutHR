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
                Mailings: [
                    {
                        url: "#/app/massmailing",
                        title: "Mass Mailing"
                    },
                    {
                        url: "#/app/massmailing/massmailinglist",
                        title: "Mailing Lists"
                    },
                ],
                Reports: "#/app/massmailing/massmailingreport",
                Configuration: [
                    {
                        url: "#/app/massmailing/massmailingsetting",
                        title: "Setting"
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