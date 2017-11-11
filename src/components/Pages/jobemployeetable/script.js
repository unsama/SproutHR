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
            self.btnlinks.createbtnlink ="/recruitment/hremployeecreate/"+self.$route.params.id;
            self.btnlinks.firstbtnlink ="/recruitment/jobemployee/"+self.$route.params.id
            self.btnlinks.printBadgebtnlink = "/attendance/PrintBadge/"+self.$route.params.id;
            $("#action").hide();
            $(".printbtnDrop").hide();
            $("#export").click(function () {
                self.btnlinks.subordinatebtnlink = "/attendance/hierarchy/"+self.$route.params.id;
            });

            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                    $(".printbtnDrop").show();
                }else{
                    $("#action").hide();
                    $(".printbtnDrop").hide();
                }
            });
            $("#leavesSummary").click(function () {
                $(".bd-example-modal-lg1").modal('show');
            });


            // $("#num01").click(function () {
            //     self.ssubmit();
            //
            // });
            // $("#num10").click(function () {
            //     self.psubmit();
            // });

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
                    // self.btnlinks.deletebtnlink = "/setting/users/"+del;
                    // self.delete();
                });
                console.log(del);
                self.delete(del);
                self.select();
                alert(del);
            });
        });



        // $(function(){
        //     $('.samobuttopcontroller2').off('click');
        //     $('.samobuttopcontroller2').on('click', function () {
        //         let check = $('#createform').css("display");
        //         if(check == "none"){
        //             $('#createform').show();
        //             $('#createedit').hide();
        //         }else{
        //             $('#createform').hide();
        //             $('#createedit').show();
        //         }
        //
        //     });
        // });
    },
    data(){
        return {
            btnlinks: {
                createbtnlink: "",
                editbtnlink:"#/app/Employees/TableHrEdit",
                importbtnlink:"#/app/Employees/HrImport",
                firstbtnlink: "",
                secondbtnlink: "",
                subordinatebtnlink:"",
                deletebtnlink:"",
                deletedropbtnlink:"",
                leavesSummarybtnlink:"",
                printBadgebtnlink:"",
                exportbtnlink:"",
            },
            tableheader: [
                "ID",
                "Name",
                "Work Phone",
                "Work Email",
                // "Department",
                // "Job Title",
                // "Manager",




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
                // "",
                // "",
            ],
            r: true,
            p: false,
            num: '',
            counter: 1,

            k: true,
            nextactivity: "Employees",

            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,
        }
    },
    methods: {
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/numemp1", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                console.log(self.num)

            }, function (err) {
            });
        },
        select3: function () {
            var self = this;
            self.counter+=1;
            self.$http.post("/recruitment/empnext1", {
                "counter": self.counter,"id": self.$route.params.id
            }).then(function(res){
                var data = res.body.data;
                console.log(data);
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.employeename,
                                val.work_phone,
                                val.work_email,
                                // val.department_id,
                                // val.job_tittle,
                                // val.employeename,
                            ],
                            "url": "/recruitment/Hremployeeinfo/"+val.id,
                        });
                    });
                }
            },function(err){
            });

        },
        select4: function () {
            var self = this;
            self.counter-=1;
            self.$http.post("/recruitment/empback1", {
                "counter": self.counter,"id": self.$route.params.id
            }).then(function(res){
                var data = res.body.data;
                console.log(data);
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.employeename,
                                val.work_phone,
                                val.work_email,
                                // val.department_id,
                                // val.job_tittle,
                                // val.employeename,
                            ],
                            "url": "/recruitment/Hremployeeinfo/"+val.id,
                        });
                    });
                }
            },function(err){
            });



        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/fetchEmployeeName1", {
                "counter": self.counter,"id": self.$route.params.id
            }).then(function(res){
                var data = res.body.result;
                console.log(data);
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.employeename,
                                val.work_phone,
                                val.work_email,
                                // val.department_id,
                                // val.job_tittle,
                                // val.employeename,
                            ],
                            "url": "/recruitment/Hremployeeinfo/"+val.id,
                        });
                    });
                }
            },function(err){
            });
        },
        delete: function (del) {
            var self = this;
            //alert(self.current_company+ " ");
            console.log("a"+del);
            self.$http.post("/recruitment/deleteEmployees", {"delete_items": del}).then(function(res){
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








// import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
// import Tabs from "./../../partials/Tabs/Tabs.vue"
// import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
// import Componame from "./../../partials/Componame/Componame.vue"
// import Tableview from "./../../partials/Tableview/Tableview.vue"
// import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import Pin from "./../../partials/Pin/Pin.vue"
// import  TableMain from "./../../partials/TableMain/TableMain.vue"
// import Contract from "./../../partials/Contract/Contract.vue"
// import Contracting from "./../../partials/Contracting/Contracting.vue"
// export default{
//     created: function () {
//
//         $(function(){
//
//             var oldtext;
//             $('.note.btn.btn-primary').hover(function(){
//                 oldtext = $(this).text();
//                 $(this).text("Unfollow");
//             }, function(){
//                 $(this).text(oldtext)
//             });
//         });
//         $(function(){
//             $('.samobuttopcontroller2').off('click');
//             $('.samobuttopcontroller2').on('click', function () {
//                 let check = $('#createform').css("display");
//                 if(check == "none"){
//                     $('#createform').show();
//                     $('#createedit').hide();
//                 }else{
//                     $('#createform').hide();
//                     $('#createedit').show();
//                 }
//
//             });
//         });
//     },
//     data(){
//         return {
//             btnlinks: {
//                 createbtnlink: "#/app/attendance/AttTableHrcreate",
//                 editbtnlink:"#/app/Employees/TableHrEdit",
//
//                 importbtnlink:"#/app/attendance/AttTableHrImport",
//                 firstbtnlink: "#/app/attendance/Grids",
//             },
//             tableheader: [
//                 "Name",
//                 "Work Phone",
//                 "Work Email",
//                 "Company",
//                 "Department",
//                 "Job Title",
//                 "Manager",
//
//
//
//
//             ],
//             tabledata: {
//                 "row": {
//                     "data": [
//                         "Hassan",
//                         "Alupak",
//                         "Khan",
//                         "Khan",
//                         "Khan",
//                         "Khan",
//                         "Khan",
//
//                     ],
//                     "url": "#/app/attendance/AttHrTables"
//
//
//                 },
//
//             },
//             tablefooter:[
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//
//
//             ],
//             r: true,
//             p: false,
//             k: true,
//             nextactivity: "Employees",
//             counter: 0,
//             m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
//             message: 'To: Followers of "PO00007: 637.50 Rs."',
//             v: false,
//
//         }
//     },
//     components: {
//         Emptyform,
//         Tabs,
//         ModelDescription,
//         Componame,
//         Pin,
//         Tableview,
//         Contract,
//         Contracting,
//         TableMain,
//         DashboardController
//
//     }
//
// }
//
//
//
//
//
//
//
