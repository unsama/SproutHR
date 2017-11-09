import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
import Modal from "./../../partials/Modal/Modal.vue"
export default{
    created: function () {
        $(document).ready(function() {
            $('#dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });

        $(document).ready(function() {
            $('#dateRangePicker1')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });



        


    },
    data(){
        return{
            title: 'Setting'
        }
    },
    components: {
        Dashboardsetting,
        Modal

    }
}

