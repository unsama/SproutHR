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
            nextactivity: "40 Hours/Week",
            modal12: "Open: Leaves",
            modal2: "Open: Department",
            modal3: "Open: Job Title",
            modal4: "Open: Currency",
            modal5: "Open: Recruitment Responsible",
            modal6: "Open: Job Location",
            modal7: "Create: Contacts",
            modal8: "Open: Title",
            modal9: "Open: Account Receivable",
            modal23: "Open: Leaves",
            modal24: "Open: Working Time",
            modal10: "Open: Account Payable",
            modal11: "Open: Working Address",
            modal25: "Open: Working Address",

            btnlinks: {
                createbtnlink: "#/app/attendance/TimeEdit",
                discardbtnlink: "#/app/attendance/WorkingTime",
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
        Modal,
    }
}