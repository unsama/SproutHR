import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
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
            $(".archivedpagi").hide();
            $(".firstpagi").show();
            $("#archived").click(function () {
                $(".archivedpagi").show()
                $(".firstpagi").hide()
            });
            $("#archived").click(function () {
                self.selectArcivedDepartments();
            });

            self.$watch('managerId', function (val) {
                self.employeeNames.forEach(function (row) {
                    if (row.employeename === val) {
                        self.managerId = row.id;
                    }
                });
            });

            $("#action").hide();

            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }
                else{
                    $("#action").hide();

                }
                // alert("check it");
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
            num: '',

            btnlinks: {
                createbtnlink: "/Employees/Dep",
                deletebtnlink:"",
                exportbtnlink:"",
                importbtnlink:"#/app/Employees/TableImport",
                firstbtnlink: "/Employees/EmpDash",
                archivebtnlink: "",

            },
            counter:1,
            tableheader: [
                "Id",
                "Display Name",
                "Manager",
                "Parent Department",




            ],
            tabledata: {
                "row": {
                    "data": [
                        "",
                        "Hassan",
                        "Khan",
                        "Accounts"

                    ],
                    "url": "#/app/Employees/Tables"


                },

            },
            tablefooter:[
                "",
                "",
                "",
                "",
                "",




            ],
            r: true,
            p: false,
            k: true,
            nextactivity: "Departments",
            counter: 1,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },
    methods: {
        selectArcivedDepartments: function () {
            var self = this;
            self.$http.post("/employees/fetchArchivedDepartmentsToTableView").then(function (res){
                var data = res.body.result;
                console.log(data);
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.ID,
                                val.displayname,
                                val.manager,
                                val.deptId,
                                // "Id",
                                // "Display Name",
                                // "Manager",
                                // "Parent Department",
                            ],
                            "url": "/Employees/Tables/"+val.ID,

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
            self.counter+=5;
            self.$http.post("/employees/department_tablenext", {
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
                                val.displayname,
                                val.manager,
                                val.deptId,


                            ],
                            "url": "/Employees/Tables/"+val.ID,

                        });
                    });
                }

            },function(err){
                alert(err);
            });
        },
        select5: function () {
            var self = this;
            self.counter+=5;
            self.$http.post("/employees/archivedDepartment_tablenext", {
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
                                val.displayname,
                                val.manager,
                                val.deptId,


                            ],
                            "url": "/Employees/Tables/"+val.ID,

                        });
                    });
                }

            },function(err){
                alert(err);
            });
        },
        select4: function () {
            var self = this;
            self.counter-=5;
            self.$http.post("/employees/department_tableback", {
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
                                val.displayname,
                                val.manager,
                                val.deptId,

                            ],
                            "url": "/Employees/Tables/"+val.ID,

                        });
                    });
                }

            },function(err){
                alert(err);
            });

        },
        select6: function () {
            var self = this;
            self.counter-=5;
            self.$http.post("/employees/archivedDepartment_tableback", {
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
                                val.displayname,
                                val.manager,
                                val.deptId,

                            ],
                            "url": "/Employees/Tables/"+val.ID,

                        });
                    });
                }

            },function(err){
                alert(err);
            });

        },
        select: function () {
            var self = this;
            self.$http.post("/Employees/putDepartmentsToTableView", {
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
                                val.displayname,
                                val.manager,
                                val.deptId,
                                // "Id",
                                // "Display Name",
                                // "Manager",
                                // "Parent Department",
                            ],
                            "url": "/Employees/Tables/"+val.ID,

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
            //alert(self.current_company+ " ");
            console.log("a"+del);
            self.$http.post("/Employees/deleteDepartment", {"delete_items": del}).then(function(res){
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

            self.$http.post("/Employees/numdep", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;



                console.log(res.body)
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
        Contracting,
        TableMain,
        DashboardController

    }

}







