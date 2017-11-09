import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Point Of Sale",
            title: 'Point of Sale - Sprout',
            btnlinks: {
                createbtnlink:"/pointofsale/pointofsalemaincreate",
                importbtnlink:"/pointofsale/pointofsaleimport"
            },
            tableheader: [
                "Point of Sale Name"


            ],
            tablefoot:[
              "",
              "",
              

            ],
            tabledata: {
                "row": {
                    "data": [
                        "main",
                    ],
                    "url": "/pointofsale/posmain"

                },
                
            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}