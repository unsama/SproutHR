import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function () {
        var self = this;
        self.select();
        self.select1();
        $(function () {

            self.btnlinks.editbtnlink = "/employees/deptSettingEdit/" + self.$route.params.id;  //"'ReqSettingEdit/'+row.id")
            self.btnlinks.duplicatebtnlink = "/Employees/DepartmentDuplicate/" + self.$route.params.id;

//             $("#createbutton").click(function () {
//                 window.location.href = "/employees/Dep";
//             });
            $("#delete").click(function () {
                self.deleteDepartment();
                window.location.href = "/employees/EmpDash";
            });
            $("#num01").click(function () {
                self.nextsubmit();
                //self.select3();
            });
            $("#num10").click(function () {
                self.backsubmit();
            });

            // $("#duplicate").click(function () {
            //
            //     window.location.href = "/employees/DuplicateDepartment/"+self.$route.params.id;
            // });



            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });

            // $("#save").click(function(){
            //     this.select();
            // });


        });


    },
    data () {
        return {

            DepartmentName: '',
            parentDepartmentName: '',
            parentDepartmentId: '',
            ManagerName: '',
            ManagerId: '',
            counter: 1,
            num: '',

            nextactivity: "Departments",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "/employees/Dep",
                discardbtnlink: "#/app/Employees/EmpDash",
                importbtnlink: "#/app/imported",
                editbtnlink: "",
                deletebtnlink:"",
                duplicatebtnlink:"",
            },

        }
    },

    methods: {
        backsubmit: function () {
            var self = this;
            self.$http.post("/Employees/usaa", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.$route.params.id = parentdata.id;
                self.DepartmentName = parentdata.name;
                self.parentDepartmentId = parentdata.parent_dept_id;
                self.ManagerId = parentdata.manager_id;

                console.log("parentdata.parent_dept_id  = "+self.parentDepartmentId);

                self.$http.post("/Employees/selectdep", {"id":parentdata.parent_dept_id}).then(function (res) {
                    var datas = res.body.data[0];
                    self.parentDepartmentName = datas.name;
                    self.$http.post("/Employees/selectemployee", {"id": self.ManagerId}).then(function (res) {
                        var data = res.body.data[0];
                        self.ManagerName = data.employeename;



                        console.log("selectdepartment service output  =  " );
                        console.log(parentdata);
                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });
        },
        nextsubmit: function () {
            var self = this;
            self.$http.post("/Employees/usa", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.$route.params.id = parentdata.id;
                self.DepartmentName = parentdata.name;
                self.parentDepartmentId = parentdata.parent_dept_id;
                self.ManagerId = parentdata.manager_id;

                console.log("parentdata.parent_dept_id  = "+self.parentDepartmentId);

                self.$http.post("/Employees/selectdep", {"id":parentdata.parent_dept_id}).then(function (res) {
                    var datas = res.body.data[0];
                    self.parentDepartmentName = datas.name;
                    self.$http.post("/Employees/selectemployee", {"id": self.ManagerId}).then(function (res) {
                        var data = res.body.data[0];
                        self.ManagerName = data.employeename;



                        console.log("selectdepartment service output  =  " );
                        console.log(parentdata);
                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });




        },
        deleteDepartment: function () {
            var self = this;
            self.$http.post("/Employees/deleteSelectedDepartment", {"id": self.$route.params.id }).then(function(res){
                alert("Are you sure you want to delete the department???");
                console.log("this is the id of department to be deleted =  "+self.$route.params.id);
            },function(err){
                //alert(err);
            });
        },
        select: function () {
            var self = this;

            self.$http.post("/Employees/selectdepartment", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.DepartmentName = parentdata.name;
                self.parentDepartmentId = parentdata.parent_dept_id;
                self.ManagerId = parentdata.manager_id;

                console.log("parentdata.parent_dept_id  = "+self.parentDepartmentId);

                self.$http.post("/Employees/selectdep", {"id":parentdata.parent_dept_id}).then(function (res) {
                    var datas = res.body.data[0];
                    self.parentDepartmentName = datas.name;
                self.$http.post("/Employees/selectemployee", {"id": self.ManagerId}).then(function (res) {
                    var data = res.body.data[0];
                    self.ManagerName = data.employeename;



                console.log("selectdepartment service output  =  " );
                console.log(parentdata);
            }, function (err) {

            });
            }, function (err) {

            });
            }, function (err) {

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
        DashboardController,
        Request_quotation_lower,
        Modal,
        Message,



    }

}




// import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
// import Message from "./../../partials/Message/Message.vue"
// import Modal from "./../../partials/Modal/Modal.vue"
//
//
// export default {
//     created: function () {
//         var self = this;
//         self.select();
//         $(function () {
//             self.btnlinks.editbtnlink = "/employees/ReqSettingEdit/" + self.$route.params.id;  //"'ReqSettingEdit/'+row.id")
//
//             $("#editbutton").click(function () {
//                 window.location.href = "/employees/ReqSettingEdit/"+self.$route.params.id;
//             });
//             $("#createbutton").click(function () {
//                 window.location.href = "/employees/Dep";
//             });
//             $("#deletebutton").click(function () {
//                 self.deleteDepartment();
//                 window.location.href = "/employees/EmpDash";
//             });
//
//             $("#duplicatebutton").click(function () {
//
//                 window.location.href = "/employees/DuplicateDepartment/"+self.$route.params.id;
//             });
//
//         });
//
//
//     },
//     data() {
//         return {
//             DepartmentName: '',
//             parentDepartmentName: '',
//             parentDepartmentId: '',
//             ManagerName: '',
//             ManagerId: '',
//
//
//             nextactivity: "Departments/as",
//             modal2: "Open: Department",
//             modal3: "Open: Job Title",
//             modal4: "Open: Currency",
//             modal5: "Open: Recruitment Responsible",
//             modal6: "Open: Job Location",
//             modal7: "Create: Contacts",
//             modal8: "Open: Title",
//             modal9: "Open: Account Receivable",
//             modal10: "Open: Account Payable",
//             modal11: "Open: Working Address",
//             modal12: "Warning",
//             modal50: "Open:Manager",
//             modal60: "Open:Manager",
//             modal61: "Open:Manager",
//             btnlinks: {
//                 createbtnlink: "#/app/Recruitment/ReqDepcreate",
//                 discardbtnlink: "#/app/Employees/EmpDash",
//                 importbtnlink: "#/app/imported",
//                 editbtnlink: "",//#/app/Recruitment/ReqDepEdit
//             },
//         }
//     },
//
//     methods: {
//         deleteDepartment: function () {
//             var self = this;
//             self.$http.post("/Employees/deleteSelectedDepartment", {"id": self.$route.params.id }).then(function(res){
//                 alert("Are you sure you want to delete the department???");
//                 console.log("this is the id of department to be deleted =  "+self.$route.params.id);
//             },function(err){
//                 //alert(err);
//             });
//         },
//
//         select: function () {
//             var self = this;
//
//             self.$http.post("/Employees/selectdepartment", {"id": self.$route.params.id}).then(function (res) {
//                 var parentdata = res.body.data[0];
//                 self.DepartmentName = parentdata.name;
//                 self.parentDepartmentId = parentdata.parent_dept_id;
//                 self.ManagerId = parentdata.manager_id;
//
//                 console.log("parentdata.parent_dept_id  = "+self.parentDepartmentId);
//
//                 self.$http.post("/Employees/selectdep", {"id":parentdata.parent_dept_id}).then(function (res) {
//                     var datas = res.body.data[0];
//                     self.parentDepartmentName = datas.name;
//                 self.$http.post("/Employees/selectemployee", {"id": self.ManagerId}).then(function (res) {
//                     var data = res.body.data[0];
//                     self.ManagerName = data.employeename;
//
//
//
//                 console.log("selectdepartment service output  =  " );
//                 console.log(parentdata);
//             }, function (err) {
//
//             });
//             }, function (err) {
//
//             });
//             }, function (err) {
//
//             });
//         },
//
//         components: {
//
//             Request_quotation_lower,
//             Modal,
//             Message,
//             DashboardController,
//         },
//
//
//     },
// }