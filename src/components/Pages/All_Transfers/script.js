import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        nextactivity: "Stock Operations",
        title: "Stock Operations - Sprout",
        btnlinks: {
            createbtnlink:"/inventory/all_transfer_create",
            importbtnlink:"/inventory/all_transfer_import",
            firstbtnlink:"/inventory/all_transfer_grid",
            secondbtnlink:"/inventory/all_transfers",
            fifthbtnlink:"/inventory/all_transfer_calender",
        },
        tableheader: [
            "Reference",
            "Destination Location Zone",
            "Partner",
            "Schduled Date",
            "Source Document",
            "Back Order Of",
            "Status",

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

        ],
        tabledata: {
            "row": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",
                    "01/28/2017 19:23:00",
                    "Chicago Warehouse",
                    "Proposition",
                    "Available",

                ],
                "url": "/inventory/all_transfers_table"

            },
            "row1": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",
                    "01/28/2017 19:23:00",
                    "Chicago Warehouse",
                    "Proposition",
                    "Available",

                ],
                "url": "/inventory/all_transfers_table"

            },
            "row2": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",
                    "01/28/2017 19:23:00",
                    "Chicago Warehouse",
                    "Proposition",
                    "Available",

                ],
                "url": "/inventory/all_transfers_table"

            },

        }
    }
},


components: {
    DashboardController,
        TableMain
}
}