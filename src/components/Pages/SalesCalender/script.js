import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Calendar from "./../../partials/Calendar/Calendar.vue"


export default{
    created: function(){
        console.log("this is some check")
    },
    data () {
        return {
            nextactivity: "Dashboard / Meetings (Week 13)",
            modal: "Log an Activity",
            btnlinks: {
                createbtnlink: "/sales/salesnextactivitiescreate",
                discardbtnlink: "/sales/customers",
                importbtnlink: "/sales/app/imported",
                editbtnlink: "/sales/salesnextactivityedit"
            },
        }
    },
    components: {
        DashboardController,
        Calendar


    }

}