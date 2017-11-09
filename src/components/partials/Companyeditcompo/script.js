import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Companiesincompo from "./../../partials/Companiesincompo/Companiesincompo.vue"
import Companycreatecompo from "./../../partials/Companycreatecompo/Companycreatecompo.vue"
import Companyeditcompo from "./../../partials/Companyeditcompo/Companyeditcompo.vue"


export default{
    created: function () {
        var self = this;
        $(function () {
            $('.SeeMore2').click(function(){

                var text = $(this).html();
                if(text == "active"){
                    $(this).html("inactive");
                    $(".check").addClass("fa fa-fw fa-check");

                }else{
                    $(this).html('active');
                }
            });
            $("#save").click(function () {
                var r = confirm("Are you sure update the company");
                if (r)
                {
                    // x="You pressed OK!";
                    window.location.href = "../companiesin/"+self.$route.params.id;
                    self.update();
                }
                else
                {
                    // x="You pressed Cancel!";
                }
            });
            self.btnlinks.editbtnlink = "/setting/companycreate/"+self.$route.params.id;
            self.btnlinks.discardbtnlink = "/setting/companiesin/"+self.$route.params.id;
            self.select();


        });
        document.title = this.title;
    },

    data(){
        return {
            head: "Users / Administrators",
            title: 'Administrators - Sprout',
            modalhead: 'Change Password',
            btnlinks: {
                savebtnlink: "",
                discardbtnlink: ""
            },
            company_name: '',
            tag_line: '',
            street_one: '',
            street_two: '',
            city: '',
            state_name_data: '',
            state_name: '',
            zip: '',
            country_name_data: '',
            country_name: '',
            website: '',
            phone: '',
            fax: '',
            email: '',
            tax_id: '',
            current_registry: '',
            currency_name_data: '',
            currency: '',
            parent_company_id: '',
            company_name_parent_data: '',
            name_company: '',
            company_id: '',
            currency_id: '',
            country_id: '',
            state_id: '',
            current_state_id: '',
            project_name: '',

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
        project_modal: function () {
            var self = this;
            self.$http.post("/setting/project_id", {"id": self.product_detail}).then(function(res){
                var parentdata = res.body.result[0];
                self.project_name = parentdata.name;
                self.task_as = parentdata.tasks_as;
                self.task_as_name = parentdata.task_as_name;

                console.log(res);
            },function(err){
                console.log(err);
            });

            //console.log(this.product_detail);
        },
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/setting/company_info", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.result[0];
                console.log(parentdata);
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


            }, function (err) {
                // alert(err);
            });
            self.$http.post("/setting/company_country_states", {"state_name": self.state_name}).then(function(res){self.state_name_data =res.body.result;},function(err){
               // alert(err);
            });
            self.$http.post("/setting/company_country_name", {"country_name": self.country_name}).then(function(res){self.country_name_data =res.body.result;},function(err){
                //alert(err);
            });
            self.$http.post("/setting/company_currency_name", {"currency": self.currency}).then(function(res){self.currency_name_data =res.body.result;},function(err){
                //alert(err);
            });
            self.$http.post("/setting/companytable", {"company_name": self.company_name}).then(function(res){self.company_name_parent_data =res.body.result;},function(err){
                //alert(err);
            });

        },

        update: function () {
            var self = this;
            //alert(self.current_state_id);
            self.$http.post("/setting/company_date_update", {
                "id": self.$route.params.id ,
                "company_name": self.company_name,
                "company_id": self.company_id,
                "tag_line": self.tag_line,
                "street_one": self.street_one,
                "street_two": self.street_two,
                "city": self.city,
                "current_state_id": self.current_state_id,
                "zip": self.zip,
                "website": self.website,
                "phone": self.phone,
                "fax": self.fax,
                "email": self.email,
                "tax_id": self.tax_id,
                "current_registry": self.current_registry,
                "currency_id": self.currency_id,
                "currency_name": self.currency_name,
                "country_id": self.country_id,


            }).then(function(res){
                //console.log(res.body);
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
        Companiesincompo,
        Companycreatecompo,
        Companyeditcompo

    }
}
