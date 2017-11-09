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
        var self = this;
        document.title = this.title;
        this.select();
        this.select1();
        var del = []; // initialize empty array
        $(function(){
            $("#action").hide();
            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }else{
                    $("#action").hide();
                }
            });
            $(".delete").click(function () {
                $(".checkBoxClass:checked").each(function(){
                    del.push($(this).val());

                });
                console.log(del);
                self.delete(del);

            });


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
                createbtnlink:"/recruitment/Jobcreate",
                importbtnlink:"/recruitment/JobImport",
                editbtnlink:"#/app/attendance/Pin",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
            },
            tableheader: [
                " ID",
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
                    "url": "/recruitment/ReqDep"


                },


            },
            r: true,
            p: false,
            k: true,
            nextactivity: "Job Positions",
            title : "Job Positions - Sprout",
            num: '',
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },
    methods: {
        delete: function (del) {
            var self = this;
            //alert(self.current_company+ " ");
            console.log("a"+del);
            self.$http.post("/recruitment/delete_job", {"delete_items": del}).then(function(res){

                //console.log(res.body);
            },function(err){
                //alert(err);
            });
            this.select();
            this.select1();
        },
        select1: function () {

            var self = this;

            self.$http.post("/recruitment/num5", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                //console.log(this.$route.query.id);
            }, function (err) {

            });

        },
        select3: function () {
            var self = this;
            self.counter+=10;
            self.$http.post("/recruitment/jobnext", {
                "counter": self.counter
            }).then(function(res){
                var data = res.body.data;

                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.job_tittle,
                                val.name,
                                val.currentemployees,
                                val.expected,
                                val.forcasted,
                                val.hiredemployees,
                                val.status.data[0],


                            ],
                            "url": "/recruitment/job/"+val.id,

                        });
                    });
                }

            },function(err){

            });

        },
        select4: function () {
            var self = this;
            self.counter-=10;
            self.$http.post("/recruitment/jobback", {
                "counter": self.counter
            }).then(function(res){
                var data = res.body.data;

                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.job_tittle,
                                val.name,
                                val.currentemployees,
                                val.expected,
                                val.forcasted,
                                val.hiredemployees,
                                val.status.data[0],


                            ],
                            "url": "/recruitment/job/"+val.id,

                        });
                    });
                }

            },function(err){

            });

        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/job", {
            }).then(function(res){
                var data = res.body.data;

                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.job_tittle,
                                val.name,
                                val.currentemployees,
                                val.expected,
                                val.forcasted,
                                val.hiredemployees,
                                val.Language,


                            ],
                            "url": "/recruitment/job/"+val.id,

                        });
                    });
                }

            },function(err){

            });
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                //this.submit();
                //this.tags();
                //this.insert();
                //this.select();
                //this.insert();
                // this.submiting();


            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
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
        Tablecheck,
        dashconterller: DashboardController

    }

}







