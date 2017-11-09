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
                createbtnlink:"#/app/Recruitment/Jobcreate",
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
                " Status",
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
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Asad",
                        "Alupak",
                        "khan",
                        "Leaves",
                    ],
                    "url": "#/app/Recruitment/job"
                },

            },
            r: true,
            p: false,
            k: true,
            nextactivity: "Job Positions",
            title : "Configure Recuritment - Sprout",
            counter: 0,
            interview_form: '',
            notinterview_forms: '',
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/settings", {"interview_form": self.interview_form,"notinterview_form": self.notinterview_form}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {

                this.submit();

            }).catch(() => {
                // eslint-disable-next-line

            });
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







