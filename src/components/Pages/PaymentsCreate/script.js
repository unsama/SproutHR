import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function () {
        document.title = this.title;
        $(document).ready(function() {
            $('#dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });
    },
    data () {
        return {
            head: "Payments/ New",
            modal: "Open: Payment Transaction",
            btnlinks: {
                savedbtnlink:"/accounting/paymentscreate",
                discardbtnlink:"/accounting/payments"
            },

        }
    },


    components: {
        DashboardController,
        Modal

    }
}