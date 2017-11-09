import CalendarT from "./../../partials/CalendarT/CalendarT.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "All Leaves (April 2017)",
            btnlinks: {
                createbtnlink:"/inventory/inventory_adjustments_create",
                importbtnlink:"/inventory/inventory_adjustments_import"
            },
            tableheader: [
                "Employees",
                "Allocation Mode",
                "Employees Tag",
                "Leave type",
                "Description",
                "Allocated Days",
                "Start Date",
                "End Date",
                "Status",



            ],
            tabledata: {
                "row": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",



                    ],
                    "url": "/#/app/inventory/inventory_adjustments_table"

                },
                "row1": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",



                    ],
                    "url": "/#/app/inventory/inventory_adjustments_table"

                },
                "row2": {
                    "data": [
                        "MO/00003",
                        "02/18/2017 18:26:08",
                        "[FURN001] Computer Desk",
                        "1.000",
                        "Waiting",
                        "",
                        "Confirmed",
                        "Confirmed",
                        "Confirmed",



                    ],
                    "url": "/#/app/inventory/inventory_adjustments_table"

                },

            }
        }
    },


    components: {
        CalendarT,
        DashboardController,
    }
}