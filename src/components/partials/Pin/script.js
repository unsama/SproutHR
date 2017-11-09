import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function () {
        $(document).ready(function() {
            $('.dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });

        $(document).ready(function() {
            $('.dateRangePicker1')
                .datepicker({
                    format: 'mm/dd/yyyy ',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                });
            $('.datetimepicker1').datetimepicker();
        });

        $('#openBtn').click(function(){
            $('#myModal').modal({show:true})
        });


    },
    data(){
        return{

            nextactivity: "Attendances/New",
            btnlinks: {
                createbtnlink: "#/app/sales/salescustomeredit",
                discardbtnlink: "#/app/attendance/Manage",
                importbtnlink: "#/app/imported"
            },
        }
    },
    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Tableview,
        Modal,
        dashconterller: DashboardController


    }
}