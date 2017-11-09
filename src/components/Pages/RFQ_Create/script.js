import Dashboardsetting from "./../../partials/Dashboardsetting/Dashboardsetting.vue"
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




    },
    data(){
        return{
            title: 'Setting'
        }
    },
    components: {
        Dashboardsetting

    }
}

