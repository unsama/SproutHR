import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
import Tablecheck from "./../../partials/Tablecheck/Tablecheck.vue"
export default{
    created: function () {
        document.title = this.title;
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
                createbtnlink:"#/ChannelGridcreate",
                importbtnlink:"#/app/Recruitment/JobImport",
                editbtnlink:"#/app/attendance/Pin"
            },
            tableheader: [
                " Job Title",
                " Department",
                " Current Number Of Empolyee",
                " Expected New Empolyee",
                " Total Forcasted Empolyee",
                " Hired Empolyees",
                " Status",

            ],
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "Asad",
                        "Alupak",
                        "khan",
                        "Leaves",
                        "5",
                        "5",
                        "Accept",


                    ],
                    "url": "#/app/Recruitment/job"


                },

            },
            r: true,
            p: false,
            k: true,
            nextactivity: "#Starred/Public Channels",
            title : "Job Positions - Sprout",
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
        Tablecheck,
        dashconterller: DashboardController

    }

}







