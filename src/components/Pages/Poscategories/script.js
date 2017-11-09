import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            title:"Pos Product Categories - Sprout",
            head: "Pos Product Categories",
            btnlinks: {
                createbtnlink:"/pointofsale/poscategoriescreate",
                importbtnlink:"/pointofsale/poscategoriesimport"
            },
            tableheader: [
                "Display Name"


            ],
            tablefoot:[
                "",
                "",
                "",


            ],
            tabledata: [
                {
                    "data": [
                        "Fruits",
                    ],
                    "url": "/pointofsale/fruits"

                },
                {
                    "data": [
                        "Vegetables",
                    ],
                    "url": "/pointofsale/fruits"

                },


            ]
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}