import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"
import Posmaincompo from "./../../partials/Posmaincompo/Posmaincompo.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Point Of Sale / Main(Administrators)",
            btnlinks: {
                createbtnlink:"/pointofsale/pointofsalemaincreate",
                editbtnlink:"/pointofsale/posmainedit"
            },
            tableheader: [
                "Point of Sale Name"


            ],
            tabledata: {
                "row": {
                    "data": [
                        "main",
                    ],
                    "url": "#/posmain"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag,
        Posmaincompo
    }
}