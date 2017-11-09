import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'inventory',
            sidebarData: {
                Dashboard: "/leaves",
                MyLeaves: [
                    {
                        url: "/leaves/leaves_summary",
                        title: "Leaves Summary"
                    },
                    {
                        url: "/leaves/leaves_request_calendar",
                        title: "Leaves Request"
                    },
                    {
                        url: "/leaves/leaves_allocation",
                        title: "Allocation Request"
                    },
                ],
                LeavesToApprove: [
                    {
                        url: "/leaves/leaves",
                        title: "Leaves"
                    },
                    {
                        url: "/leaves/leaves_table",
                        title: "Leaves Allocation"
                    },
                ],
                Reports:[
                    {
                        url: "/leaves/leaves_details",
                        title: "Leaves Details"
                    },
                    {
                        url: "/leaves/leaves_pivot",
                        title: "Leaves"
                    },
                    {
                        modal: {
                            data_target: ".bd-example-modal-lg"
                        },
                        url: false,
                        title: "Leaves Department"
                    }
                ],
                Configuration: "/leaves/leaves_configuration",

            }
        }
    },
    components: {
        Sidebar,
        Dashboardsetting,
        Topcontroller,
        DashboardController,
        Modal,
        TableMain,

    }

}