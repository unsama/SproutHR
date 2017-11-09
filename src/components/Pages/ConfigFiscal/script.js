import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Fiscal Positions",
            title: "Fiscal Positions - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/createfiscal",
                importbtnlink:"/accounting/fiscalpositionsimport"
            },
            tableheader: [
                "Fiscal Position",
                "Company"


            ],
            tabledata: {
                "row": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/accounting/fruits"

                },
                "row1": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/accounting/fruits"

                },
                "row2": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/accounting/fruits"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}