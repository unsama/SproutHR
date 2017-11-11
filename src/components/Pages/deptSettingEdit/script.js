import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ReqEdit from "./../../partials/ReqEdit/ReqEdit.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"




export default{
    created: function () {
        var self = this;
        this.select();
        this.select1();
        $(function() {
            $("#save").click(function () {
                var r = confirm("Are you sure update user");
                if (r)
                {
                    // x="You pressed OK!";
                    //console.log("asdasdas");

                    self.submit();
                    window.location.href = "../ReqDep/"+self.$route.params.id;
                }
                else
                {
                    // x="You pressed Cancel!";
                }
            });
            self.btnlinks.discardbtnlink = "/employees/ReqDep/"+self.$route.params.id;

            $("#num01").click(function () {
                self.ssubmit();


            });
            $('#abcs').on('change',function(){
                var ab = $('#abcs option:selected').val();
                console.log("value of parent department=  "+ab);
                if(ab== null){
                    $('#ss').hide();
                }
                else{
                    $('#ss').show();
                }
            });
            $(".dept_dropdown").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit..."){
                    $(".bd-example-modal-lg1").modal('show');
                }
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
            parent_dept_id: '',
            manager_id: '',
            job_location: '',
            counter: 1,
            j: '',
            d: '',
            names: '',
            options2: '',
            options: '',
            num: '',
            nmanager_id: '',
            nname: '',
            nparent_dept_id: '',
            mname: '',
            mparent_dept_id: '',
            mmanager_id: '',
            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                savebtnlink:"",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/Employees/Editreqs", {"id": self.$route.params.id,"name": self.name,"parent_dept_id": self.parent_dept_id,"manager_id": self.manager_id}).then(function(res){
                console.log(res.body);

            },function(err){

            });
        },
        ssubmit: function () {

            var self = this;
            self.$http.post("/Employees/usa", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;
                self.$route.params.id = parentdata.id;

                console.log(res.body)
                self.$http.post("/Employees/deps", {

                }).then(function(res){
                    self.options2 =res.body.data;
                    console.log(res.body);
                },function(err){

                });
                self.$http.post("/Employees/emps", {

                }).then(function(res){
                    self.options =res.body.data;
                    console.log(res.body);
                },function(err){

                });


            }, function (err) {

            });




        },
        //modal work department
        submitmodaledit: function () {
            var self = this;

            self.$http.post("/Employees/deps", {
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){
                alert(err);
            });


            self.$http.post("/Employees/Editreqsmodal", {"id": self.parent_dept_id,"name": self.nname,"parent_dept_id": self.nparent_dept_id,"manager_id": self.nmanager_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });


        },
        submitmodal: function () {
            var self = this;


            self.$http.post("/Employees/depinsertmodal", {"name": self.mname,"parent_dept_id": self.mparent_dept_id,"manager_id": self.mmanager_id}).then(function(res){

                console.log(res.body);
            },function(err){

            });

        },
        select2: function () {
            var self = this;
            self.$http.post("/Employees/depss", {"id": self.parent_dept_id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.nname = parentdata.name;
                self.nparent_dept_id = parentdata.parent_dept_id;
                self.nmanager_id = parentdata.manager_id;
                console.log(res.body)
                self.$http.post("/Employees/deps", {
                }).then(function(res){
                    self.options2 =res.body.data;
                    console.log(res.body);
                },function(err){
                    alert(err);
                });
                self.$http.post("/Employees/emps", {

                }).then(function(res){
                    self.options =res.body.data;
                    console.log(res.body);
                },function(err){

                });
            }, function (err) {

            });




        },
        psubmit: function () {
            var self = this;
            self.$http.post("/Employees/usaa", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;
                self.$route.params.id = parentdata.id;

                console.log(res.body)
                self.$http.post("/Employees/deps", {

                }).then(function(res){
                    self.options2 =res.body.data;
                    console.log(res.body);
                },function(err){

                });
                self.$http.post("/Employees/emps", {

                }).then(function(res){
                    self.options =res.body.data;
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
            self.$http.post("/Employees/depss", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;

                console.log(res.body);
                self.$http.post("/Employees/deps", {

                }).then(function(res){
                    self.options2 =res.body.data;
                    console.log(res.body);
                },function(err){
                    alert(err);
                });
                self.$http.post("/Employees/emps", {

                }).then(function(res){
                    self.options =res.body.data;
                    console.log(res.body);
                },function(err){

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
                //  alert('Correct them errors!');
            });
        }
    },
    components: {
        DashboardController,
        Request_quotation_lower,
        Modal,
        Message,
        ReqEdit,
    },


}