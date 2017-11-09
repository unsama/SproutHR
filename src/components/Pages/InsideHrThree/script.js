import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"

export default{
    created: function () {
        $(function() {
            //use this method to add new colors to pallete
            //$.fn.colorPicker.addColors(['000', '000', 'fff', 'fff']);




        });



    },
    props: [
        "edit",

    ],
    data () {
        return {
            nextactivity: "New",
            btnlinks: {
                createbtnlink:"#/app/attendance/InsideHrThree",
                editbtnlink:"#/app/attendance/InsideHrThree",
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