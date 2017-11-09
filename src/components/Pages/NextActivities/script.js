import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Next Activity",
            title: "Next Activity - Sprout",
            btnlinks: {
                createbtnlink:"/sales/salesnextactivitiescreate",
                importbtnlink:"/sales/salesnextactivityimport",
                firstbtnlink:"/sales/nextactivities",
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
                "Expected closing",

            ],
            tablefooter: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test",
                        "Proposition",
                        "60,000.00",
                        "30,23"
                    ],
                    "url": "/sales/Salesnextactivityview"

                },
                "row1": {
                    "data": [
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test",
                        "Proposition",
                        "60,000.00",
                        "30,23"
                    ],
                    "url": "/sales/Salesnextactivityview"

                },
                "row2": {
                    "data": [
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test",
                        "Proposition",
                        "60,000.00",
                        "30,23"
                    ],
                    "url": "/sales/Salesnextactivityview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}