import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            pricelists: "Pricelists / New",
            btnlinks: {
                createbtnlink:"/sales/newuser",
                importbtnlink:"/sales/imported",
                discardbtnlink:"/sales/salespricelists"
            },
            tableheader: [
                "Name"


            ],
            tablefooter:[
              "",
              "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Add an Items",

                    ],
                    "url": "/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "",

                    ],
                    "url": "/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "",


                    ],
                    "url": "/sales/request_quotation_inner"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag,
        TableMain
    }
}