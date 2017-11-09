import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Point Of Sale",
            modal0: "Open: Working Time",
            modal12: "Open: Leaves",
            btnlinks: {
                createbtnlink:"#/app/pos/pointofsalemaincreate",
                importbtnlink:"#/app/pos/pointofsaleimport"
            },
            tableheader: [
                " Name",
                " Day OF Week",
                " Work From",
                " Work To",
                " Strarting Date",
                " End Date",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "Monday morning",
                        "Monday",
                        "08:00	",
                        "08:00	",
                        "",
                        "",
                    ],


                },

            },
            tableheader1: [
                "Reason",
                "Resource",
                " Company",
                " Working Time",
                " Start Date",
                " End Date",


            ],
            tabledata1: {
                "row1": {
                    "data": [
                        " 2 Hours On Leave",
                        "Analyst",
                        "Alupak Industriess	",
                        "40 Hours/Week	",
                        "01/28/2017 13:00:00",
                        "08/28/2017 13:00:00",
                    ],


                },

            }

        }
    },


    components: {
        DashboardController,
        TableMain,
        Modal
    }
}