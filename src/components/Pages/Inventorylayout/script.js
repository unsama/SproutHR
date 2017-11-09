import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'inventory',
            sidebarData: {
                Dashboard: "/inventory",
                Operations: [
                    {
                        url: "/inventory/all_transfers",
                        title: "All Transfers"
                    },

                ],
                InventoryControl: [
                    {
                        url: "/inventory/inventory_product",
                        title: "Products"

                    },
                    {
                        url: "/inventory/reordering_rules",
                        title: "Reordering Rules"
                    },
                    {
                        url: "/inventory/inventory_adjustments",
                        title: "Inventory Adjusments"
                    },
                    {
                        url: "/inventory/inventory_scrap",
                        title: "Scrap"
                    },
                ],
                Schedulers:[
                    {
                        modal: {
                            data_target: ".bd-example-modal-lg"
                        },
                        url: false,
                        title: "Run Schedulers"
                    }
                ],
                Reports:[
                    {
                        url: "/inventory/inventory_valuation",
                        title: "Inventory Valuation"
                    },
                    {
                        url: "/inventory/stock_moves",
                        title: "Stock Moves"
                    },
                    {
                        url: "/inventory/procurement_exceptions",
                        title: "Procurement Exceptions"
                    }
                ],
                Configuration:[
                    {
                        url: "/inventory/inventory_settings",
                        title: "Settings"
                    },
                    {
                        url: false,
                        title: "Products",
                        childrens:[
                            {
                                url: "/inventory/inventory_product_categories",
                                title: "Product Categories"
                            }
                        ]
                    },
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