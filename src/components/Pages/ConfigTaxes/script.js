import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Taxes",
            title: "Taxes - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/createtax",
                importbtnlink:"/accounting/configtaxesimport"
            },
            tableheader: [
                "Tax Name",
                "Tax Scope",
                "Short Name",
                "Company"


            ],
            tabledata: {
                "row": {
                    "data": [
                        "Tax 15.00%",
                        "Purchases",
                        "15.00%",
                        "Alupak Industriess"
                    ],
                    "url": "/accounting/taxes"

                },
                "row1": {
                    "data": [
                        "Tax 15.00%",
                        "Sales",
                        "15.00%",
                        "Alupak Industriess"
                    ],
                    "url": "/accounting/taxes"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}