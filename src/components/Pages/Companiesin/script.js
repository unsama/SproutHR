import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Companiesincompo from "./../../partials/Companiesincompo/Companiesincompo.vue"
export default{
    created: function () {
        var self = this;
        this.select();
        $(function () {
            $("#delete").click(function () {
                self.delete_inside();
                alert("are you sure delete the user");
                window.location.href = "../company";
            });
            $("#changepassword").click(function () {
                self.pwd_update();
                window.location.href = "/setting/users";
            });
            $("#send_resert_pwd_instruction").click(function () {
                self.send_resert_pwd_instructions();
                //window.location.href = "/setting/users";
            });
            $("#topm21").click(function () {
                $(".pwd").hide();
                $(".show_pwd").show();
            });
            $('.SeeMore2').click(function(){

                var text = $(this).html();
                if(text == "active"){
                    $(this).html("inactive");
                    $(".check").addClass("fa fa-fw fa-check");

                }else{
                    $(this).html('active');
                }
            });
            self.btnlinks.editbtnlink = "/setting/Companiesinedit/"+self.$route.params.id;
            self.select();
            self.submit();
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
                createbtnlink: "/setting/companycreate",
                editbtnlink: "/setting/",
                assignedtasksbtnlink: "/setting/userassignedtask",
                planordersbtnlink: "",
                changepasswordbtnlink: "",
                exportbtnlink: "",
                duplicatebtnlink: ""
            },
            company_name: '',
            tag_line: '',
            street_one: '',
            street_two: '',
            city: '',
            state_id: '',
            zip: '',
            country_id: '',
            website: '',
            phone: '',
            fax: '',
            email: '',
            tax_id: '',
            current_registry: '',
            currency_id: '',
            parent_company_id: '',
            currency_name: '',
            current_company_name: '',
            next_pagination_id: '',
            status: '',
            v: true,
            v1: false
        };
    },
    methods: {
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/setting/company_info", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.result[0];
                self.company_name = parentdata.company_name;
                self.tag_line = parentdata.tag_line;
                self.street_one = parentdata.street_one;
                self.street_two = parentdata.street_two;
                self.city = parentdata.city;
                self.state_id = parentdata.state_id;
                self.zip = parentdata.zip;
                self.website = parentdata.website;
                self.phone = parentdata.phone;
                self.fax = parentdata.fax;
                self.email = parentdata.email;
                self.tax_id	 = parentdata.tax_id;
                self.current_registry = parentdata.current_registry;
                self.currency_id = parentdata.currency_id;
                self.parent_company_id = parentdata.parent_company_id;
                self.currency_name = parentdata.currency_name;

                //console.log(self.status);
                //console.log(this.$route.query.id);
                self.$http.post("/alias_value", {"alias_id": self.alias_id}).then(function (res) {
                    //console.log(res.body);
                    var parentdata = res.body.result[0];
                    self.name = parentdata.name;

                }, function (err) {
                    //alert(err);
                });

            }, function (err) {
                // alert(err);
            });
            self.$http.post("/setting//user_info2", {"id": self.$route.params.id}).then(function (res) {
                //console.log(res.body);
                var parentdata = res.body.result[0];
                self.sales = parentdata.sales;
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

        },
        previous_pagination: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/setting//company_info", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.result[0];
                self.company_name = parentdata.company_name;
                self.tag_line = parentdata.tag_line;
                self.street_one = parentdata.street_one;
                self.street_two = parentdata.street_two;
                self.city = parentdata.city;
                self.state_id = parentdata.state_id;
                self.zip = parentdata.zip;
                self.website = parentdata.website;
                self.phone = parentdata.phone;
                self.fax = parentdata.fax;
                self.email = parentdata.email;
                self.tax_id	 = parentdata.tax_id;
                self.current_registry = parentdata.current_registry;
                self.currency_id = parentdata.currency_id;
                self.parent_company_id = parentdata.parent_company_id;
                self.currency_name = parentdata.currency_name;

                //console.log(self.status);
                //console.log(this.$route.query.id);
                self.$http.post("/alias_value", {"alias_id": self.alias_id}).then(function (res) {
                    //console.log(res.body);
                    var parentdata = res.body.result[0];
                    self.name = parentdata.name;

                }, function (err) {
                    //alert(err);
                });

            }, function (err) {
                // alert(err);
            });
            self.$http.post("/user_info2", {"id": self.$route.params.id}).then(function (res) {
                //console.log(res.body);
                var parentdata = res.body.result[0];
                self.sales = parentdata.sales;
                self.project = parentdata.project;
                self.inventory = parentdata.inventory;
                self.manufacturing = parentdata.manufacturing;
                self.accounting = parentdata.accounting;
                self.employee = parentdata.employee.data[0];
                self.manager = parentdata.manager.data[0];
                self.equipment_manager = parentdata.equipment_manager.data[0];
                self.officer = parentdata.officer.data[0];

                //console.log(parentdata);
            }, function (err) {
                //alert(err);
            });

        },
        next_pagination: function () {
            var self = this;
            self.$http.post("/setting/company_pagination", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data;
                self.company_name = parentdata.company_name;
                self.tag_line = parentdata.tag_line;
                self.street_one = parentdata.street_one;
                self.street_two = parentdata.street_two;
                self.city = parentdata.city;
                self.state_id = parentdata.state_id;
                self.zip = parentdata.zip;
                self.website = parentdata.website;
                self.phone = parentdata.phone;
                self.fax = parentdata.fax;
                self.email = parentdata.email;
                self.tax_id	 = parentdata.tax_id;
                self.current_registry = parentdata.current_registry;
                self.currency_id = parentdata.currency_id;
                self.parent_company_id = parentdata.parent_company_id;
                self.currency_name = parentdata.currency_name;
                self.$route.params.id = parentdata.id;
            }, function (err) {

            });


        },
        submit: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/user_status", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        pwd_update: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/user_pwd_update", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        send_resert_pwd_instructions: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/send_resert_pwd_instruction", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        delete_inside: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/delete_company_info_inside", {"id": self.$route.params.id }).then(function(res){
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
        TableMain,
        Companiesincompo
    }
}
