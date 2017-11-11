import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

import Modal from "./../../partials/Modal/Modal.vue"


export default {
    created: function () {
        var self = this;
        self.select();
        $(function () {
            // $("#save").click(function () {
            //     self.submit();
            //     window.location.href = "/employees/EmpDash";
            // });

            $("#save").click(function () {
                if(self.departName=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);


                    });

                }
                else{
                    self.submit();
                    window.location.href = "/employees/EmpDash";
                }

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


        });
    },

    data() {
        return {

            //container variables to store data temporarily after fetching data from database
            parentDepartmentNames: '',
            employeeNames: '',
            type:'',

            // declare variables to save dep page data into database, in other words insert querry variables
            departName: '',
            parent_dept_id: '',
            managerId: '',


            v: true,
            v1: false,

            nextactivity: "Departments/New",
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
                discardbtnlink: "/Employees/TableDep",
                editbtnlink: "#/app/attendance/InsideHrTwo",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
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

        },
        submit: function () {

            var self = this;
            //var ckeditor_value = CKEDITOR.instances.editor1.getData();

            self.$http.post("/employees/addNewDepartment", {
                "departName": self.departName, "parentDeptId": self.parentDeptId, "managerId": self.managerId
            }).then(function (res) {
                //console.log(res.body);
            }, function (err) {

            });
        },
    },

    components: {
        DashboardController,
        Modal,
    },
}



