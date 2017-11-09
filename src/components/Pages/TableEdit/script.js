import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Message from "./../../partials/Message/Message.vue"


export default{
    created: function () {
        var self = this;
        self.select();
        self.select1();
        $(function() {
            $("select#o_field_input_156 option").each(function(){
                alert("$(this).val()  : "+$(this).val());
                if($(this).val()==self.managerId){
                    $(this).attr("selected","selected");
                }
            });
            $("#o_field_input_157 option").each(function(){
                if($(this).val()==self.parentDeptId){
                    $(this).attr("selected","selected");
                }
            });

            // self.$watch('managerId', function (val) {
            //     self.employeeNames.forEach(function (row) {
            //         if (row.employeename === val) {
            //             self.managerId = row.id;
            //         }
            //     });
            // });


            $("#save").click(function () {
                alert("save buttton is pressed!!!");
                self.submit();
                window.location.href = "/Employees/Tables/"+self.$route.params.id;
            });


            $(".parentDeptNamesDropdown").on('change', function () {
                var value = $(this).val();
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg1").modal('show');
                }
            });

            $(".managerNamesDropdown").on('change', function () {
                var value = $(this).val();
                console.log("value of val in manager dropdown:    " + value);
                if (value == "Create and Edit...") {
                    $(".bd-example-modal-lg61").modal('show');
                }
            });
            $("#num01").click(function () {
                self.ssubmit();
            });

            $("#num10").click(function () {
                self.psubmit();
            });


        });


    },
    props: [
        "edit",

    ],
    data () {
        return {

            //container variables to store data temporarily after fetching data from database
            parentDepartmentNames: '',
            employeeNames: '',


            // declare variables to save dep page data into database, in other words insert querry variables
            departName: '',
            parent_dept_id: '',
            parentDeptId: '',
            managerId: '',
            num: '',
            counter: 1,

            nextactivity: "Departments/Asad",
            modal2: "Open: Department",
            modal3: "Open: Job Title",
            modal4: "Open: Currency",
            modal5: "Open: Recruitment Responsible",
            modal6: "Open: Job Location",
            modal7: "Create: Contacts",
            modal8: "Open: Title",
            modal9: "Open: Account Receivable",
            modal10: "Open: Account Payable",
            modal11: "Open: Working Address",
            modal12: "Warning",
            modal50: "Open:Manager",
            modal60: "Open:Manager",
            modal61: "Open:Manager",
            btnlinks: {
                savebtnlink: "",
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/Employees/TableDep",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        psubmit: function () {
            var self = this;
            self.$http.post("/Employees/usaa", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.departName = parentdata.name;
                self.parentDeptId = parentdata.parent_dept_id;
                self.managerId = parentdata.manager_id;
                self.$route.params.id = parentdata.id;

                console.log(res.body)
                self.$http.post("/Employees/deps", {

                }).then(function(res){
                    self.parentDepartmentNames =res.body.data;
                    console.log(res.body);
                },function(err){

                });
                self.$http.post("/Employees/emps", {

                }).then(function(res){
                    self.employeeNames =res.body.data;
                    console.log(res.body);
                },function(err){

                });


            }, function (err) {

            });

        },
        ssubmit: function () {

            var self = this;
            self.$http.post("/Employees/usa", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.departName = parentdata.name;
                self.parentDeptId = parentdata.parent_dept_id;
                self.managerId = parentdata.manager_id;
                self.$route.params.id = parentdata.id;

                console.log(res.body)
                self.$http.post("/Employees/deps", {

                }).then(function(res){
                    self.parentDepartmentNames =res.body.data;
                    console.log(res.body);
                },function(err){

                });
                self.$http.post("/Employees/emps", {

                }).then(function(res){
                    self.employeeNames =res.body.data;
                    console.log(res.body);
                },function(err){

                });
                //console.log(this.$route.query.id);

                // self.$http.post("/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
                //         var data = res.body.data[0];
                //         self.j = data.name;
                //         //console.log(self.job_tittle);
                //         console.log(res.body);
                //         self.$http.post("/manager", {"manager_id":self.manager_id}).then(function (res) {
                //                 var data = res.body.data[0];
                //                 self.d = data.employeename;
                //                 //console.log(self.job_tittle);
                //
                //                 console.log(res.body);
                //
                //
                //             },
                //
                //             function (err) {
                //                 alert(err);
                //             });
                //     },
                // function (err) {
                //     alert(err);
                // });

            }, function (err) {

            });




        },
        select: function () {
            var self = this;

            self.$http.post("/employees /fetchdeparments", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.data;

                console.log(self.names);
            }, function (err) {

            });


            self.$http.post("/employees/fetchParentDepartmentNames", {"parent_dept_name": self.name}).then(function (res) {
                self.parentDepartmentNames = res.body.result;
            }, function (err) {

            });

            self.$http.post("/employees/fetchDepartmentManagerNames", {"manager_name": self.employeename}).then(function (res) {
                self.employeeNames = res.body.result;
            }, function (err) {

            });

            self.$http.post("/Employees/fetchDepartments2", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.departName = parentdata.name;
                self.managerId = parentdata.manager_id;
                self.parentDeptId = parentdata.parent_dept_id;
                console.log(parentdata);

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

        submit: function () {
            alert("Inside submit body!!!");
            var self = this;
            //var ckeditor_value = CKEDITOR.instances.editor1.getData();

            self.$http.post("/employees/EditDepartment", {
                "id": self.$route.params.id,
                "departName": self.departName, "parentDeptId": self.parentDeptId, "managerId": self.managerId
            }).then(function (res) {
                //console.log(res.body);
            }, function (err) {

            });
        },
    },
    components: {
        DashboardController,
        Request_quotation_lower,
        Modal,
        Message,
    },


}