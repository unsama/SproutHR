import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Bank Accounts",
            title: "Bank Accounts - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/createbank",
                importbtnlink:"/accounting/imported"
            },
            tableheader: [
                "Journal Name",
                "Company"


            ],
            tabledata: {
                "row": {
                    "data": [
                        " Bank ",
                        " Alupak Indusries"
                    ],
                    "url": "/accounting/bankaccount"

                },
                "row1": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/accounting/bankaccount"

                },
                "row2": {
                    "data": [
                        " ",
                        " "
                    ],
                    "url": "/accounting/bankaccount"

                },


            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}