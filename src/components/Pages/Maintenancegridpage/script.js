import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Maintenancegridin from "./../../partials/Maintenancegridin/Maintenancegridin.vue"
import Message from "./../../partials/Message/Message.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Maintenance Requests / Touchpad not working",
            title:"Maintenance Requests - Sprout",
            btnlinks: {
                createbtnlink: "#/app/expenses/expensesreportscreate",
                editbtnlink: "#/app/expenses/expensessubmitedit",
                firstbtnlink:  "#/app/expenses/expensessubmitgrid",
                secondbtnlink: "#/app/expenses/expensessubmit",

            },
            // comments:[
            //     {
            //         "name": "Muhammad Saqib",
            //         "msg": "Check Some1"
            //     },
            //     {
            //         "name": "Osama Sheikh",
            //         "msg": "Check Some2"
            //     },
            //     {
            //         "name": "Usama Wahid",
            //         "msg": "Check Some3"
            //     }
            // ]

        }
    },


    components: {
        DashboardController,
        Maintenancegridin,
        Message,
        Request_quotation_lower

    },

}
