import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import SalesGridview from "./../../partials/SalesGridview/SalesGridview.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Quotation",
            btnlinks: {
                createbtnlink:"/sales/salesnextactivitiescreate",
                importbtnlink:"/sales/salesnextactivityimport",
                firstbtnlink:"/sales/quotation",
                secondbtnlink:"/sales/salesnextactivitylistview",
            },
            tableheader: [
                "Opportunity",
                "Customer",
                "Next Activity Date",
                "Next Activity",
                "Next Activity Summary",
                "Stage",
                "Expected Revenue",
                "Expected closing"

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chic/IN/00004",

                    ],
                    "url": "/sales/salesquotationview"


                },


            }
        }
    },


    components: {
        DashboardController,
        SalesGridview
    }
}