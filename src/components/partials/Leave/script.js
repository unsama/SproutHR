import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
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

    },
    data(){
        return {
            btnlinks: {
                createbtnlink:"#/app/attendance/InsideHr",
                editbtnlink:"#/app/attendance/NewImport",
                importbtnlink:"#/app/attendance/NewImport"

            },
            r: true,
            p: false,
            k: true,
            nextactivity: "Employees/Jack Macklin/Leaves",
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
        Tableview,
        dashconterller: DashboardController

    }

}







