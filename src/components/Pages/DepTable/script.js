import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
export default{
    created: function () {

        $(function(){

            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
        });
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#createform').css("display");
                if(check == "none"){
                    $('#createform').show();
                    $('#createedit').hide();
                }else{
                    $('#createform').hide();
                    $('#createedit').show();
                }

            });
        });
    },
    data(){
        return {
            btnlinks: {
                createbtnlink:"#/app/Employees/Allocationcreate",
                importbtnlink:"#/app/Employees/AllocationImport",
                editbtnlink:"#/app/attendance/Pin"
            },
            tableheader: [
                " Employee",
                " Allocation Mode",
                " Employee Tag",
                " Leave Type",
                " Description",
                " Allocation Day",
                " Start Day",
                " End Day",
                " Status",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "Administaor",
                        "By Employee",
                        "",
                        "Legal Leaves 2017	",
                        "Tour to quetta",
                        "20.00",
                        "02/26/2017 05:00:00",
                        "02/26/2017 05:00:00",
                        "Approved",
                    ],
                    "url": "#/app/Employees/Allocation"


                },

            },
            r: true,
            p: false,
            k: true,
            nextactivity: "DepartmentsAllocation Requests to Approve",
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },
    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Pin,
        Tableview,
        TableMain,
        dashconterller: DashboardController

    }

}







