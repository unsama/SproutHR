import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

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
            head: "Currencies/ 2010-01-01 01:00:00",
            btnlinks: {
                savedbtnlink: "#/app/accounting/currencyrateedit",
                discardbtnlink: "#/app/accounting/Currencyratetable"
            },


        }
    },


    components: {

        DashboardController,
    }
}