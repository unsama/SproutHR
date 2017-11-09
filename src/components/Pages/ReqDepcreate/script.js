import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ReqEdit from "./../../partials/ReqEdit/ReqEdit.vue"


export default{
    created: function () {
        var self = this;
        this.select();

        $(function() {


            $('#abcs').on('change',function(){
                var ab = $('#abcs option:selected').val();
                if(ab== null){
                    $('#ss').hide();
                }
                else{
                    $('#ss').show();
                }
            });
            $(".dept_dropdown").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit"){
                    $(".bd-example-modal-lg1").modal('show');
                }
            });
            $("#save").click(function () {

                    if(self.name=="")
                    {
                        $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                            $("#success-alert").slideUp(500);
                        });
                    }
                    else{
                        self.submit();

                        window.location.href = "../recruitment/DepsReq";
                    }



            });

        });
    },
    props: [
        "edit",
    ],
    data () {
        return {
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
            name: '',
            nname: '',
            parent_dept_id: '',
            nparent_dept_id: '',
            manager_id: '',
            nmanager_id: '',
            mname: '',
            mparent_dept_id: '',
            mmanager_id: '',
            j: '',
            d: '',
            names: '',
            options2: '',
            options: '',
            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/recruitment/DepsReq",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                savebtnlink:"",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        submitmodaledit: function () {
            var self = this;

                self.$http.post("/recruitment/deps", {
                }).then(function(res){
                    self.options2 =res.body.data;
                    console.log(res.body);
                },function(err){
                    alert(err);
                });
            self.$http.post("/recruitment/Editreqsmodal", {"id": self.parent_dept_id,"name": self.nname,"parent_dept_id": self.nparent_dept_id,"manager_id": self.nmanager_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });


        },
        submit: function () {
            var self = this;

            self.$http.post("/recruitment/depinsert", {"name": self.name,"parent_dept_id": self.parent_dept_id,"manager_id": self.manager_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        submitmodal: function () {
            var self = this;


            self.$http.post("/recruitment/depinsertmodal", {"name": self.mname,"parent_dept_id": self.mparent_dept_id,"manager_id": self.mmanager_id}).then(function(res){

                console.log(res.body);
            },function(err){

            });

        },
        select2: function () {
            var self = this;
            self.$http.post("/recruitment/depss", {"id": self.parent_dept_id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.nname = parentdata.name;
                self.nparent_dept_id = parentdata.parent_dept_id;
                self.nmanager_id = parentdata.manager_id;
                console.log(res.body)
                self.$http.post("/recruitment/deps", {
                }).then(function(res){
                    self.options2 =res.body.data;
                    console.log(res.body);
                },function(err){
                    alert(err);
                });
                self.$http.post("/recruitment/emps", {

                }).then(function(res){
                    self.options =res.body.data;
                    console.log(res.body);
                },function(err){

                });
            }, function (err) {

            });




        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/deps", {"id": self.$route.params.id}).then(function (res) {
                console.log(res.body)
                self.$http.post("/recruitment/deps", {
                }).then(function(res){
                    self.options2 =res.body.data;
                    console.log(res.body);
                },function(err){
                });
                self.$http.post("/recruitment/emps", {
                }).then(function(res){
                    self.options =res.body.data;
                    console.log(res.body);
                },function(err){
                });
            }, function (err) {
            });
        },
        validateBeforeSubmit() {
            var self = this;
            this.$validator.validateAll().then(() => {


            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Modal,
        ReqEdit,
    },


}