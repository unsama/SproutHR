import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"


export default{
    created: function(){
        console.log("this is some check");
    },
    data(){
        return{
            title: 'Discuss',
            sidebarData: {
                Purchase: [
                    {
                        url: "/purchase",
                        title: "Requests for Quotation"
                    },
                    {
                        url: "/purchase/purchase_order",
                        title: "Purchase Orders"
                    },
                    {
                        url: "/purchase/vendor",
                        title: "Vendors"
                    },
                    {
                        url: "/purchase/products",
                        title: "Products"
                    },
                    {
                        url: "/purchase/entry_gate",
                        title: "Gate Entry"
                    }
                ],
                Control: [
                    {
                        url: "/purchase/incoming_products",
                        title: "Incoming Products"
                    },
                    {
                        url: "/purchase/vendor_bills",
                        title: "Vendor Bills"
                    },

                ],
                Reports: "/purchase/purchasereports",
                Configuration: [
                    {
                        url: "/purchase/setting",
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
    }

}