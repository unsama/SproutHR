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
            title: 'pos',
            sidebarData: {
                Dashboard: "/pointofsale/",
                Orders: [
                    {
                        url: "/pointofsale/posorders",
                        title: "Orders"
                    },
                    {
                        url: "/pointofsale/possession",
                        title: "Sessions"
                    },
                    {
                        url: "/pointofsale/posproduct",
                        title: "Products"
                    },
                ],
                Reports:[
                    {
                        url: "/pointofsale/posorderreport",
                        title: "Orders"
                    },
                    {
                        modal: {
                            data_target: ".bd-example-modal-lg"
                        },
                        url: false,
                        title: "Sale Details"
                    }
                ],
                Configuration:[
                    {
                        url: "/pointofsale/setting",
                        title: "Settings"
                    },
                    {
                        url: "/pointofsale/pointofsale",
                        title: "Point of Sale"
                    },
                    {
                        url: "/pointofsale/categories",
                        title: "POS Product Categories"
                    },
                    {
                        url: "/pointofsale/pospayment",
                        title: "Payments Methods"
                    },
                    {
                        url: "/pointofsale/posbarcode",
                        title: "Barcode Nomenclatures"
                    }
                ],
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