import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Point Of Sale",
            btnlinks: {
                createbtnlink:"#/app/pos/posedit",
                importbtnlink:"#/app/pos/imported"
            },
            tableheader: [
                "Rule Name",
                "Type",
                "Encoding",
                "Barcode Pattern",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Price Barcodes 1 Decimals",
                        "Priced Product",
                        "EAN-13",
                        "23.....{NNNDD}",
                    ],
                    "url": "/#/app/sales/request_quotation_inner"
                },
                "row1": {
                    "data": [
                        "Price Barcodes 2 Decimals",
                        "Priced Product",
                        "EAN-14",
                        "24.....{NNNDD}",
                    ],
                    "url": "/#/app/sales/request_quotation_inner"
                },
                "row2": {
                    "data": [
                        "Price Barcodes 3 Decimals",
                        "Priced Product",
                        "EAN-15",
                        "25.....{NNNDD}",
                    ],
                    "url": "/#/app/sales/request_quotation_inner"
                },
                "row3": {
                    "data": [
                        "Price Barcodes 4 Decimals",
                        "Priced Product",
                        "EAN-16",
                        "26.....{NNNDD}",
                    ],
                    "url": "/#/app/sales/request_quotation_inner"
                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}