import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            activities: "Activities",
            title: "Activities - Sprout",
            btnlinks: {
                createbtnlink:"/sales/salesactivitycreate",
                importbtnlink:"/sales/salesactivityimport"
            },
            tableheader: [
                "Pricelist Name",
                "Currency"

            ],
            tablefooter : [
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Public Pricelist",
                        "USD"
                    ],
                    "url": "/sales/salesactivityview"

                },
                "row1": {
                    "data": [
                        " Sales",
                        ""
                    ],
                    "url": "/sales/salesactivityview"

                },
                "row2": {
                    "data": [
                        " Sales",
                        ""

                    ],
                    "url": "/sales/salesactivityview"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}