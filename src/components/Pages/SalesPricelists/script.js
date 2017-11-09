import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            pricelists: "Pricelists",
            title: "Pricelists -Sprout",
            btnlinks: {
                createbtnlink:"/sales/salespricelistscreate",
                importbtnlink:"/sales/salespricelistsimport"
            },
            tableheader: [
                "Message Type",
                "Number of Days",
                "Sales Teams"

            ],
            tablefooter: [
              "",
              "",
              "",
              "",
              "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Email",
                        "",
                        "0"
                    ],
                    "url": "/sales/salespricelistsview"

                },
                "row1": {
                    "data": [
                        "Indirect Sales",
                        "",
                        "30"
                    ],
                    "url": "/sales/salespricelistsview"

                },
                "row2": {
                    "data": [
                        "Website Sales",
                        "",
                        "50"

                    ],
                    "url": "/sales/salespricelistsview"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}