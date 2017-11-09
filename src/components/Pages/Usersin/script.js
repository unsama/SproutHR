import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"


export default{
    created: function () {
        var self = this;
        $(function () {
            $("#delete").click(function () {
                self.submit_inside();
                alert("are you sure delete the user");
                 window.location.href = "../users";
            });
            $(".change_pwd").click(function () {
                self.pwd_update();
                window.location.href = "/setting/users";
                console.log("asdas");
            });
            $("#send_resert_pwd_instruction").click(function () {
                var r = confirm("Are you sure send resert pwd instructions");
                if (r)
                {
                    // x="You pressed OK!";
                    //console.log("asdasdas");
                    window.location.href = "../usersin"+self.$route.params.id;
                    self.send_resert_pwd_instructions();
                }
                else
                {
                    // x="You pressed Cancel!";
                }
            });
            $("#topm21").click(function () {
                $(".pwd").hide();
                $(".show_pwd").show();
            });
            $("#duplicate").click(function () {
                var r = confirm("Are you sure duplicate the user");
                if (r)
                {
                    // x="You pressed OK!";
                    console.log("asdasdas");
                    window.location.href = "../users";
                    self.user_duplicate();
                }
                else
                {
                    // x="You pressed Cancel!";
                }
                //alert("Are you sure duplicate the user");

            });
            $('.SeeMore2').click(function(){
                var text = $(this).html();
                self.submit();
                if(text == "active"){
                    $(this).html("inactive");
                    $(".check").addClass("fa fa-fw fa-check");
                }else{
                    $(this).html('active');
                    //$(".check").addClass("fa fa-fw fa-check");
                }
            });
            self.btnlinks.editbtnlink = "/setting/usersinedit/"+self.$route.params.id;
            self.btnlinks.assignedtasksbtnlink = "/setting/userassignedtask/"+self.$route.params.id;
            self.select();
            self.count();
            $("#num01").click(function () {
                self.previous_pagination();

            });
            $("#num10").click(function () {
                self.next_pagination();
            });
        });
        document.title = this.title;
    },

    data(){
        return {
            head: "Users / Administrators",
            title: 'Administrators - Sprout',
            modalhead: 'Change Password',
            btnlinks: {
                createbtnlink: "/setting/usersincreate",
                editbtnlink: "/setting/usersinedit",
                assignedtasksbtnlink: "/setting/userassignedtask",
                planordersbtnlink: "",
                changepasswordbtnlink: "",
                exportbtnlink: "",
                duplicatebtnlink: "",
            },
            username: '',
            email: '',
            sales: '',
            project: '',
            inventory: '',
            manufacturing: '',
            accounting: '',
            employee: '',
            manager: '',
            equipment_manager: '',
            officer: '',
            language: '',
            timezone: '',
            notification: '',
            alias_id: '',
            barcode: '',
            security_pin: '',
            name: '',
            status: '',
            password: '',
            current_company_name: '',
            next_pagination_id: '',
            v: true,
            v1: false
        };
    },

    computed: {
        fullname: function () {
            return this.first + " " + this.last;
        }
    },
    methods: {
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/setting/user_info", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.result[0];
                self.username = parentdata.username;
                self.email = parentdata.email;
                self.language = parentdata.language;
                self.timezone = parentdata.timezone;
                self.notification = parentdata.notification;
                self.alias_id = parentdata.alias_id;
                self.barcode = parentdata.barcode;
                self.barcode = parentdata.barcode;
                self.security_pin = parentdata.security_pin;
                self.status = parentdata.status;
                //console.log(self.status);
                //console.log(this.$route.query.id);
            self.$http.post("/setting/alias_value", {"alias_id": self.alias_id}).then(function (res) {
                //console.log(res.body);
                var parentdata = res.body.result[0];
                self.name = parentdata.name;

            }, function (err) {
                //alert(err);
            });

            }, function (err) {
               // alert(err);
            });
            self.$http.post("/setting/user_info2", {"id": self.$route.params.id}).then(function (res) {
                //console.log(res.body);
                var parentdata = res.body.result[0];
                self.sales = parentdata.sales;
                self.project = parentdata.project;
                self.inventory = parentdata.inventory;
                self.manufacturing = parentdata.manufacturing;
                self.accounting = parentdata.accounting;
                self.purchases = parentdata.purchases;
                self.recruitment = parentdata.recruitment;
                self.expenses = parentdata.expenses;
                self.timesheets = parentdata.timesheets;
                self.attandance = parentdata.attandance;
                self.fleet = parentdata.fleet;
                self.mass_mailing = parentdata.mass_mailing;
                self.pos = parentdata.pos;
                self.administration = parentdata.administration;
                self.employee = parentdata.employee.data[0];
                self.manager = parentdata.manager.data[0];
                self.equipment_manager = parentdata.equipment_manager.data[0];
                self.officer = parentdata.officer.data[0];

                //console.log(parentdata);
            }, function (err) {
                //alert(err);
            });
            self.$http.post("/setting/user_current_company_name", {"id": self.$route.params.id}).then(function (res) {
                //console.log(res.body);
                var parentdata = res.body.result[0];
                self.current_company_name = parentdata.company_name;


                //console.log(parentdata);
            }, function (err) {
                //alert(err);
            });

        },
        previous_pagination: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/setting/user_pagination_next", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.result[0];

                self.username = parentdata.username;
                self.email = parentdata.email;

                self.language = parentdata.language;
                self.timezone = parentdata.timezone;
                self.notification = parentdata.notification;
                self.alias_id = parentdata.alias_id;
                self.barcode = parentdata.barcode;
                self.barcode = parentdata.barcode;
                self.security_pin = parentdata.security_pin;
                self.status = parentdata.status;
            self.$http.post("/setting/alias_value", {"alias_id": self.alias_id}).then(function (res) {
                //console.log(res.body);
                var parentdatas = res.body.result[0];
                self.name = parentdatas.name;
            self.$http.post("/setting/user_info2", {"id": self.$route.params.id}).then(function (res) {
                //console.log(res.body);
                var parentdataa = res.body.result[0];
                self.sales = parentdataa.sales;
                self.$route.params.id = parentdataa.id;
                self.project = parentdataa.project;
                self.inventory = parentdataa.inventory;
                self.manufacturing = parentdataa.manufacturing;
                self.accounting = parentdataa.accounting;
                self.employee = parentdataa.employee.data[0];
                self.manager = parentdataa.manager.data[0];
                self.equipment_manager = parentdataa.equipment_manager.data[0];
                self.officer = parentdataa.officer.data[0];

                //console.log(parentdata);
            }, function (err) {
                //alert(err);
            });
            }, function (err) {
                //alert(err);
            });

            }, function (err) {
                // alert(err);
            });


        },
        next_pagination: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/setting/user_pagination_previous", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.result[0];
                self.$route.params.id = parentdata.id;
                self.username = parentdata.username;
                self.email = parentdata.email;
                self.language = parentdata.language;
                self.timezone = parentdata.timezone;
                self.notification = parentdata.notification;
                self.alias_id = parentdata.alias_id;
                self.barcode = parentdata.barcode;
                self.barcode = parentdata.barcode;
                self.security_pin = parentdata.security_pin;
                self.status = parentdata.status;
            self.$http.post("/setting/alias_value", {"alias_id": self.alias_id}).then(function (res) {
                //console.log(res.body);
                var parentdata = res.body.result[0];

                self.name = parentdata.name;
            self.$http.post("/setting/user_info2", {"id": self.$route.params.id}).then(function (res) {
                //console.log(res.body);
                var parentdata = res.body.result[0];

                self.sales = parentdata.sales;
                self.$route.params.id = parentdata.id;
                self.project = parentdata.project;
                self.inventory = parentdata.inventory;
                self.manufacturing = parentdata.manufacturing;
                self.accounting = parentdata.accounting;
                self.employee = parentdata.employee.data[0];
                self.manager = parentdata.manager.data[0];
                self.equipment_manager = parentdata.equipment_manager.data[0];
                self.officer = parentdata.officer.data[0];
            }, function (err) {
                //alert(err);
            });
            }, function (err) {
                //alert(err);
            });

            }, function (err) {
                // alert(err);
            });


            //console.log(parentdata);


        },
        submit: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/user_status", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        pwd_update: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/user_pwd_update", {
                "id": self.$route.params.id ,
                "password": self.password,
            }).then(function(res){
                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        delete: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/delete_users", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                //console.log(res.body);
                alert("are you sure delete the user");
            },function(err){
                //alert(err);
            });
        },
        send_resert_pwd_instructions: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/send_resert_pwd_instruction", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        user_duplicate: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/duplicate_users", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                // alert(err);
            });
        },
        count: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/user_count", {"id": self.$route.params.id ,"user_id": self.id}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        submit_inside: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/delete_users_inside", {"id": self.$route.params.id }).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },

    },
    components: {
        DashboardController,
        Tabs,
        Modal,
        TableMain

    }
}
