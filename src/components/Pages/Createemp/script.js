import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

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

            nextactivity: "Employees/New",
            btnlinks: {
                createbtnlink: "#/app/sales/salescustomeredit",
                discardbtnlink: "#/app/attendance/Grids",
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
        Editing,
        dashconterller: DashboardController


    }
}