import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_Quotation_Lower/Request_Quotation_Lower.vue"

export default{
    created: function () {
        $(function() {
            

        });



    },
    props: [
        "edit",

    ],
    data () {
        return {
            nextactivity: "Attendances/Hans Anders from 2017-03-14 12:53:47 to 2017-03-23 12:53:50/Hans Anders/Research & Development",
            btnlinks: {

                discardbtnlink: "#/app/attendance/Hr",
                importbtnlink: "#/app/imported"
            },
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
    },


}