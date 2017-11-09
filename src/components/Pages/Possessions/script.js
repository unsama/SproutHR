import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },

    data () {
        return {
            head: "Sessions",
            title: 'Sessions - Sprout',
            btnlinks: {
                createbtnlink:"#/app/newuser",
                importbtnlink:"#/app/imported"
            },
            tableheader: [
                "Point of Sale",
                "Session ID",
                "Responsible",
                "Opening Date",
                "Closing Date",
                "Status",

            ],
            tablefoot: [
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
                        "Main(Administrator)",
                        "POS/2017/3",
                        "Administrators",
                        "03/08/2017 02:49:19",
                        "03/08/2017 02:49:19",
                        "In Progress",
                    ],
                    "url": "/pointofsale/possessionin"

                },
                "row1": {
                    "data": [
                        "Main(Administrator)",
                        "POS/2017/3",
                        "Administrators",
                        "03/08/2017 02:49:19",
                        "03/08/2017 02:49:19",
                        "In Progress",
                    ],
                    "url": "/pointofsale/possessionin"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}