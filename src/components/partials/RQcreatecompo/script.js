import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import RQcreatecompo from "./../../partials/RQcreatecompo/RQcreatecompo.vue"


export default{
    created: function () {
        $(function () {
            $('#datepicker').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            function showTestDate() {
                var value = $('#datepicker').datepicker('getFormattedDate');
                self.dates_value = value;
                //console.log(value);
            };

        });
        $(function () {
            $('#datepicker1').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);

            function showTestDate() {
                var value = $('#datepicker').datepicker('getFormattedDate');
                self.dates_value = value;
                //console.log(value);
            };

        });



    },
    props: [
        "edit",

    ],
    data () {
        return {
            nextactivity: "Requests for Quotation/New",

            btnlinks: {

                discardbtnlink: "/purchase",
                savebtnlink:"",

            },
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Modal,
        RQcreatecompo
    },


}