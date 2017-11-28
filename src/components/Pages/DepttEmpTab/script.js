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
        var del = [];
        document.title = this.title;
        self.select();
        //self.select1();


        $(function(){
            $(".archivedpagi").hide();
            $(".firstpagi").show();
            $("#archived").click(function () {
                $(".archivedpagi").show()
                $(".firstpagi").hide()
            });
            $("#archived").click(function () {
                self.selectArcivedEmployees();
            });
            self.btnlinks.printBadgebtnlink = "/Employees/Badge/"+self.$route.params.id;
            self.btnlinks.firstbtnlink = "/Employees/NewDep/"+self.$route.params.id;

            $("#action").hide();
            $(".printbtnDrop").hide();

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

            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
            $("#delete").click(function () {
                alert("inside delete");
                $(".checkBoxClass:checked").each(function(){
                    del.push($(this).val());
                });
                console.log(del);
                self.delete(del);
                self.select();
                alert(del);
            });
        });

    },
    data(){
        return {
            btnlinks: {
                createbtnlink: "#/app/Employees/TableHrcreate",
                editbtnlink:"#/app/Employees/TableHrEdit",

                importbtnlink:"#/app/Employees/HrImport",
                firstbtnlink: "",///Employees/Gridtwo",
                //secondbtnlink: "/Employees/TableHr",

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
            alert("self.$route.params.id: "+self.$route.params.id);
            self.$http.post("/employees/fetchDeptArchivedEmployeesForTable",{"id":self.$route.params.id}).then(function (res){
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
                            "url": "/Employees/DeptEmpShow/"+val.ID,

                        });
                    });
                }
            });
            self.$http.post("/Employees/countDeptArchivedEmployees",{"id":self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log('value of num'+self.num);

            }, function (err) {

            });
        },
        select3: function () {
            var self = this;
            self.counter+=3;
            self.$http.post("/employees/DeptEmployeeNext", {
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
            self.$http.post("/employees/archivedDeptEmployeeNext", {
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
            self.$http.post("/employees/DeptEmployeeBack", {
                "counter": self.counter,
                "id":self.$route.params.id,
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
            self.$http.post("/employees/archivedDeptEmployeeBack", {
                "counter": self.counter,
                "id":self.$route.params.id,
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
            self.$http.post("/Employees/putDeptEmployeesToTableView", {
                "id": self.$route.params.id,
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
                self.$http.post("/Employees/countDeptActiveEmployees", {"id": self.$route.params.id}).then(function (res) {

                    var parentdata = res.body.data[0];
                    self.num = parentdata.count;
                    console.log('value of num'+self.num);
                    //console.log(this.$route.query.id);

                }, function (err) {

                });



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
            //alert(self.current_company+ " ");
            console.log("a"+del);
            self.$http.post("/Employees/deleteEmployees", {"delete_items": del}).then(function(res){
                if(res){
                    self.select();
                }else {
                    alert("something went wrong");
                }

                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/Employees/countDeptEmployees", {"id": self.$route.params.id}).then(function (res) {

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







