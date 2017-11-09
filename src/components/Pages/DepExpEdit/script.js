import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/Tablemain/Tablemain.vue"
import Expensessubmitinedit from "./../../partials/Expensessubmitinedit/Expensessubmitinedit.vue"
import Message from "./../../partials/Message/Message.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Departments/Expense Reports to Approve/Hotel Expenses",
            btnlinks: {
                discardbtnlink: "#/app/Employees/DepExps",
                savedbtnlink: ""


            },


        }
    },


    components: {
        DashboardController,
        Tablemain,
        Expensessubmitinedit,
        Request_quotation_lower,
        Message
    },

}