import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"

export default{
    created: function(){
        console.log("this is some check")
    },
    data(){
        return{
            title: 'Discuss',
            sidebarData: {
                Dashboard: "/sales",
                Sales: [
                    {
                        url: "/sales/customers",
                        title: "Customer"
                    },
                    {
                        url: "/sales/pipeline",
                        title: "My Pipeline"
                    },
                    {
                        url: "/sales/nextactivities",
                        title: "Next Activities"
                    },
                    {
                        url: "/sales/quotation",
                        title: "Quotations"
                    },
                    {
                        url: "/sales/order",
                        title: "Sales Orders"
                    },
                    {
                        url: "/sales/products",
                        title: "Products"
                    }
                ],
                Invoicing:[
                    {
                        url: "/sales/salesofinvoices",
                        title: "Sales of Invoice"
                    },
                    {
                        url: "/sales/orderstoupsell",
                        title: "Orders to Upsell"
                    }
                ],
                Reports:[
                    {
                        url: "/sales/salespipelinereport",
                        title: "Pipeline"
                    },
                    {
                        url: "/sales/salesreportactivity",
                        title: "Activities"
                    },
                    {
                        url: "/sales/salesreport",
                        title: "Sales"
                    }
                ],
                Configuration:[
                    {
                        url: "/sales/salessettings",
                        title: "Settings"
                    },
                    {
                        url: false,
                        title: "Pricelists",
                        childrens:[
                            {
                                url: "/sales/salespricelists",
                                title: "Pricelists"
                            }
                        ]
                    },
                    {
                        url: false,
                        title: "Lead & Opportunities",
                        childrens:[
                            {
                                url: "/sales/salesactivity",
                                title: "Activities"
                            }
                        ]
                    },
                    {
                        url: "/sales/salesteams",
                        title: "Sales Teams"
                    }
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