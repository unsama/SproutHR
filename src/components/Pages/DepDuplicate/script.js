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
        $(function () {
            self.btnlinks.editbtnlink ="/recruitment/StageEdit/"+self.$route.params.id;
        })
        $(function() {
            $("#save").click(function () {
                self.submit();
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
            j: '',
            d: '',
            names: '',
            options2: '',
            options: '',
            num: '',
            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/recruitment/ReqDep",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                savebtnlink:"",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/Editreq", {"id": self.$route.params.id,"name": self.name,"parent_dept_id": self.parent_dept_id,"manager_id": self.manager_id}).then(function(res){
                console.log(res.body);

            },function(err){
                alert(err);
            });
        },
        select: function () {

            var self = this;

            self.$http.post("/deps", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.parent_dept_id = parentdata.parent_dept_id;
                self.manager_id = parentdata.manager_id;

                console.log(res.body)
                self.$http.post("/deps", {

                }).then(function(res){
                    self.options2 =res.body.data;
                    console.log(res.body);
                },function(err){
                    alert(err);
                });
                self.$http.post("/emps", {

                }).then(function(res){
                    self.options =res.body.data;
                    console.log(res.body);
                },function(err){
                    alert(err);
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
                alert(err);
            });




        },
        select1: function () {

            var self = this;

            self.$http.post("/numdep", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;



                console.log(res.body)
                alert(self.num);
                console.log(self.num)
                //console.log(this.$route.query.id);



            }, function (err) {
                alert(err);
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

                alert('From Submitted!');
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