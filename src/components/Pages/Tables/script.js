import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Message from "./../../partials/Message/Message.vue"
export default{
    created: function () {
        var self = this;
        self.select();
        self.select1();
        $(function () {
            self.btnlinks.editbtnlink = "/Employees/TableEdit/" + self.$route.params.id;
            self.btnlinks.duplicatebtnlink = "/Employees/DepartmentDuplicate/" + self.$route.params.id;
            $("#delete").click(function () {
                alert("calling delete operation!!!");
                self.deleteDepartment();
            });
            $("#num01").click(function () {
                self.nextsubmit();
                //self.select3();
            });
            $("#num10").click(function () {
                self.backsubmit();
            });
        });

    },
    data () {
        return {
            departmentName:'',
            managerName:'',
            parentDeptName:'',
            num:'',
            parent_dept_id:'',
            manager_id:'',
            counter:1,

            nextactivity: "Departments/asad",
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
                createbtnlink: "/employees/Dep",
                discardbtnlink: "#/app/Employees/EmpDash",
                editbtnlink:"/Employees/TableEdit",
                importbtnlink: "#/app/imported",
                deletebtnlink:"",
                duplicatebtnlink:"",
            },
        }
    },

    methods:{
        backsubmit: function () {
            var self = this;
            self.$http.post("/Employees/usaa", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.departmentName = parentdata.name;
                self.$route.params.id = parentdata.id;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;

                self.$http.post("/Employees/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.parentDeptName = data.name;

                        self.$http.post("/recruitment/manager", {"manager_id":self.manager_id}).then(function (res) {
                                var data = res.body.data[0];
                                self.managerName = data.employeename;
                            },
                            function (err) {

                            });
                    },
                    function (err) {

                    });
            }, function (err) {

            });
        },
        nextsubmit: function () {
            var self = this;
            self.$http.post("/Employees/usa", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.departmentName = parentdata.name;
                self.$route.params.id = parentdata.id;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;
                // console.log(res.body)
                //console.log(this.$route.query.id);
                self.$http.post("/Employees/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.parentDeptName = data.name;

                        self.$http.post("/Employees/manager", {"manager_id":self.manager_id}).then(function (res) {
                                var data = res.body.data[0];
                                self.managerName = data.employeename;

                            },
                            function (err) {

                            });
                    },
                    function (err) {

                    });
            }, function (err) {

            });




        },
        deleteDepartment: function () {
            var self = this;
            self.$http.post("/Employees/deleteSelectedDepartment2", {"id": self.$route.params.id }).then(function(res){
                alert("Are you sure you want to delete the department???");
                console.log("this is the id of department to be deleted =  "+self.$route.params.id);
            },function(err){
                //alert(err);
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/Employees/departmentShow", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.departmentName = parentdata.depttname;
                self.managerName = parentdata.deptManager;
                self.parentDeptName = parentdata.parentDept;

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



    },
    components: {
        DashboardController,
        Request_quotation_lower,
        Modal,
        Message,
    },


}