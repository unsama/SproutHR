import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Department from "./../../partials/Department/Department.vue"


export default{
    created: function () {
        var self = this;
        this.select();
        this.select1();
        $(function () {
            self.btnlinks.duplicatebtnlink ="/recruitment/departmentduplicate/"+self.$route.params.id


            $(".delete").click(function () {
                var r = confirm("Are you sure you want to  Delete the Leave Type");
                if (r)
                {
                    window.location.href = "/recruitment/DepsReq";
                    self.submit();
                }
                else
                {
                }
            });
            $("#num01").click(function () {


                self.psubmit();
            });
            $("#num10").click(function () {
                self.ssubmit();
            });
            self.btnlinks.editbtnlink ="/recruitment/ReqDepEdit/"+self.$route.params.id
        })
    },
    props: [
        "edit",
    ],
    data () {
        return {
            nextactivity: "Departments/as",
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
            name: '',
            f: '',
            counter: 1,
            parent_dept_id: '',
            manager_id: '',
            j: '',
            d: '',
            num: '',
            num4: '1',
            btnlinks: {
                createbtnlink: "/recruitment/ReqDepcreate",
                discardbtnlink: "#/app/Employees/EmpDash",
                editbtnlink:"/recruitment/ReqDepEdit",
                importbtnlink: "#/app/imported",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
            },
        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/deletes", {"id": self.$route.params.id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/depss", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.f = parentdata.name;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;
                //console.log(this.$route.query.id);
            self.$http.post("/recruitment/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
                    var data = res.body.data[0];
                    self.j = data.name;
                    //console.log(self.job_tittle);
            self.$http.post("/recruitment/manager", {"manager_id":self.manager_id}).then(function (res) {
                    var data = res.body.data[0];
                    self.d = data.employeename;

                    //console.log(self.job_tittle);

                   // console.log(res.body);
            },
            function (err) {
            });
            },
            function (err) {
            });
            }, function (err) {
            });
        },
        ssubmit: function () {
            var self = this;
            self.$http.post("/recruitment/usa", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.f = parentdata.name;
                self.$route.params.id = parentdata.id;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;
                // console.log(res.body)
                //console.log(this.$route.query.id);
            self.$http.post("/recruitment/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
                    var data = res.body.data[0];
                    self.j = data.name;

                    //console.log(self.job_tittle);
                    //   console.log(res.body);
            self.$http.post("/recruitment/manager", {"manager_id":self.manager_id}).then(function (res) {
                    var data = res.body.data[0];
                    self.d = data.employeename;
                    //console.log(self.job_tittle);
                   // console.log(res.body);
            },
            function (err) {

            });
            },
            function (err) {

            });
            }, function (err) {

            });




        },
        psubmit: function () {
            var self = this;
            self.$http.post("/recruitment/usaa", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.f = parentdata.name;
                self.$route.params.id = parentdata.id;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;
                // console.log(res.body)
                //console.log(this.$route.query.id);
            self.$http.post("/recruitment/parentdep", {"parent_dept_id":self.parent_dept_id}).then(function (res) {
                    var data = res.body.data[0];
                    self.j = data.name;

                    //console.log(self.job_tittle);
                    //   console.log(res.body);
            self.$http.post("/recruitment/manager", {"manager_id":self.manager_id}).then(function (res) {
                    var data = res.body.data[0];
                    self.d = data.employeename;
                    //console.log(self.job_tittle);
                   // console.log(res.body);
            },
            function (err) {

            });
            },
            function (err) {

            });
            }, function (err) {

            });
        },
        select1: function () {

            var self = this;

            self.$http.post("/recruitment/numdep", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                console.log(self.num)
                //console.log(this.$route.query.id);
            }, function (err) {
            });
        },
        select3: function () {

            var self = this;
            self.num4+1;
        },
        dsubmit: function () {
            var self = this;

            self.$http.post("/recruitment/depinserts", {"f": self.f,"parent_dept_id": self.parent_dept_id,"manager_id": self.manager_id}).then(function(res){
                console.log(res.body);

            },function(err){

            });
        },

        validateBeforeSubmit() {
            var self = this;
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

            });
        }
    },
    components: {
        DashboardController,
        Request_quotation_lower,
        Modal,
        Message,
        Department,
    },


}