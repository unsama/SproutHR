import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Payment Methods",
            title: 'Payment Methods - Sprout',
            btnlinks: {
                createbtnlink:"/pointofsale/poscasheditt",
                importbtnlink:"/pointofsale/pospaymentimport"
            },
            tableheader: [
                "Journal Name",
                "Company"
            ],
            tablefoot: [
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Cash",
                        "Alupak industries"
                    ],
                    "url":"/pointofsale/poscash"
                },
            },

        }
    },
    components: {
        DashboardController,
        Tabledrag
    }
}