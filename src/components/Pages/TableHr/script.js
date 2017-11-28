import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
import  TableMain from "./../../partials/TableMain/TableMain.vue"
import Contract from "./../../partials/Contract/Contract.vue"
import Contracting from "./../../partials/Contracting/Contracting.vue"
export default{
    created: function () {
        var self = this;
        var del = []; // initialize empty array
        document.title = this.title;
        self.select();
        self.select1();


        $(function(){

            $("#archived").click(function () {
                $(".archivedpagi").show()
                $(".firstpagi").hide()
            });

            $("#archived").click(function () {
                self.selectArcivedEmployees();
            });
            self.btnlinks.printBadgebtnlink = "/Employees/Badge/"+self.$route.params.id;
            $("#export").click(function () {
                self.btnlinks.subordinatebtnlink = "/Employees/hierarchy/"+self.$route.params.id;
            });

            $("#action").hide();
            $(".printbtnDrop").hide()

            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                    $(".printbtnDrop").show();
                }else{
                    $("#action").hide();
                    $(".printbtnDrop").hide();
                }
                // alert("check it");
            });

            $("#leavesSummary").click(function () {
                $(".bd-example-modal-lg1").modal('show');
            });

            $("#num01").click(function () {
                self.ssubmit();

            });
            $("#num10").click(function () {
                self.psubmit();
            });

            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
            $("#delete").click(function () {
                $(".checkBoxClass:checked").each(function(){
                    del.push($(this).val());
                });
                self.delete(del);
                self.select();
                window.location.href = "/employees/TableHr";
            });

        });

    },
    data(){
        return {
            btnlinks: {
                createbtnlink: "/employees/CreateDepone",
                editbtnlink:"#/app/Employees/TableHrEdit",

                importbtnlink:"#/app/Employees/HrImport",
                firstbtnlink: "/Employees/",
                secondbtnlink: "/Employees/TableHr",

                subordinatebtnlink:"",
                deletebtnlink:"",
                leavesSummarybtnlink:"",
                printBadgebtnlink:"",
                exportbtnlink:"",
                archivebtnlink: "",
            },
            tableheader: [
                "ID",
                "Name",
                "Work Phone",
                "Work Email",
                "Department",
                "Job Title",
                "Manager",




            ],
            tabledata: {
                "row": {
                    "data": [
                        "Hassan",
                        "Alupak",
                        "Khan",
                        "Khan",
                        // "Khan",
                        // "Khan",

                    ],
                    "url": "#/app/Employees/Hrs"


                },

            },
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
            r: true,
            p: false,
            k: true,
            nextactivity: "Employees",
            counter: 1,
            num: '',
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },
    methods: {
        selectArcivedEmployees: function () {
            var self = this;
            self.$http.post("/employees/putArchivedEmployeesToTableView").then(function (res){
                var data = res.body.result;
                console.log(data);
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.ID,
                                val.empname,
                                val.phone,
                                val.email,
                                val.deptname,
                                val.job,
                                val.empManager,
                            ],
                            "url": "/Employees/HrDeps/"+val.ID,

                        });
                    });
                }
            });
            self.$http.post("/Employees/countArchivedEmployees").then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log('value of num'+self.num);
                //console.log(this.$route.query.id);

            }, function (err) {

            });
        },
        select3: function () {
            var self = this;
            self.counter+=3;
            self.$http.post("/employees/employee_tablenext", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.ID,
                                val.empname,
                                val.phone,
                                val.email,
                                val.deptname,
                                val.job,
                                val.empManager,
                            ],
                            "url": "/Employees/HrDeps/"+val.ID,

                        });
                    });
                }

            },function(err){
                alert(err);
            });
        },
        select5: function () {
            var self = this;
            self.counter+=3;
            self.$http.post("/employees/archiveEmployee_tablenext", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.ID,
                                val.empname,
                                val.phone,
                                val.email,
                                val.deptname,
                                val.job,
                                val.empManager,
                            ],
                            "url": "/Employees/HrDeps/"+val.ID,

                        });
                    });
                }

            },function(err){
                alert(err);
            });
        },

        select4: function () {
            var self = this;
            self.counter-=3;
            self.$http.post("/employees/employee_tableback", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.ID,
                                val.empname,
                                val.phone,
                                val.email,
                                val.deptname,
                                val.job,
                                val.empManager,
                            ],
                            "url": "/Employees/HrDeps/"+val.ID,

                        });
                    });
                }

            },function(err){
                alert(err);
            });

        },
        select6: function () {
            var self = this;
            self.counter-=3;
            self.$http.post("/employees/archiveEmployee_tableback", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.ID,
                                val.empname,
                                val.phone,
                                val.email,
                                val.deptname,
                                val.job,
                                val.empManager,
                            ],
                            "url": "/Employees/HrDeps/"+val.ID,

                        });
                    });
                }

            },function(err){
                alert(err);
            });

        },

        select: function () {
            var self = this;
            self.$http.post("/Employees/putEmployeesToTableView", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                console.log(data);
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.ID,
                                val.empname,
                                val.phone,
                                val.email,
                                val.deptname,
                                val.job,
                                val.empManager,
                            ],
                            "url": "/Employees/HrDeps/"+val.ID,

                        });
                    });
                }


            },function(err){
                //alert(err);
            });
        },
        pwd_update: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/user_pwd_update", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        delete: function (del) {
            var self = this;
            console.log("a"+del);
            self.$http.post("/Employees/deleteEmployees", {"delete_items": del}).then(function(res){
                if(res){
                    self.select();
                }else {
                    alert("something went wrong");
                }
            },function(err){
                //alert(err);
            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/Employees/countEmployees", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log('value of num'+self.num);
                //console.log(this.$route.query.id);

            }, function (err) {

            });




        },
    },


    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Pin,
        Tableview,
        Contract,
        Modal,
        Contracting,
        TableMain,
        DashboardController

    }

}







