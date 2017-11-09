import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Expense Products",
            btnlinks: {
                createbtnlink: "/expenses/expensesproductlistcreate",
                importbtnlink: "/expenses/expensesproductimport",
                firstbtnlink:"/expenses/expensesproducts",
                secondbtnlink:"/expenses/expensesproductslist",

            },
            tableheader: [
                "Internal Refrence",
                "Name",
                "Sale Price",
                "Quantity On Hand",
                "Forecast Quantity",
                "Barcode",


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
                        "AT",
                        "Air Flight",
                        "10.000",
                        "1.000",
                        "0.000",
                        "",


                    ],
                    "url": "/#/"

                },
                "row1": {
                    "data": [
                        "Exp",
                        "Expenses",
                        "1.000",
                        "0.000",
                        "0.000",
                        "",


                    ],
                    "url": "/#/"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tablemain,
    },

}