import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Payment Terms",
            title:"Payment Terms - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/createmanagement",
                importbtnlink:"/accounting/configmanagementimport"
            },
            tableheader: [
                "Payment Terms"

            ],
            tablefooter: [
              "",
              "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "15 days"
                    ],
                    "url": "/accounting/management"

                },
                "row1": {
                    "data": [
                        "30 Net days"
                    ],
                    "url": "/accounting/management"

                },
                "row2": {
                    "data": [
                        "End of the month"
                    ],
                    "url": "/accounting/management"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}