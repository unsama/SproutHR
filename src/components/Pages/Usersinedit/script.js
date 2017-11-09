import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Newuser from "./../../Pages/Newuser/Newuser.vue"


export default{
    created: function () {
        var self = this;
        document.title = this.title;


        $(function () {
            $("#save").click(function () {
                var r = confirm("Are you sure update user");
                if (r)
                {
                    // x="You pressed OK!";
                    //console.log("asdasdas");
                    window.location.href = "../usersin/"+self.$route.params.id;
                    self.submit();
                }
                else
                {
                    // x="You pressed Cancel!";
                }
            });
            CKEDITOR.replace( 'editor1' );
            self.select();
            self.btnlinks.discardbtnlink = "/setting/usersin/"+self.$route.params.id;
        });
    },

    data(){
        return {
            head: "Users / Administrators",
            title: 'Administrators - Sprout',
            btnlinks: {
                discardbtnlink: "",
                savebtnlink: ""
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
            current_company: '',
            v: true,
            v1: false
        };
    },

    methods: {
        select: function () {
            var self = this;
            self.$http.post("/source", {
                "company_name": self.company_name
            }).then(function(res){self.options =res.body.data;},function(err){
                //alert(err);
            });
            self.$http.post("/setting/user_data", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
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
                self.sales = parentdata.sales;
                self.project = parentdata.project;
                self.inventory = parentdata.inventory;
                self.manufacturing = parentdata.manufacturing;
                self.accounting = parentdata.accounting;
                self.employee = parentdata.employee.data[0];
                self.manager = parentdata.manager.data[0];
                self.equipment_manager = parentdata.equipment_manager.data[0];
                self.officer = parentdata.officer.data[0];
                console.log(parentdata);
                //console.log(self.status);
                //console.log(this.$route.query.id);

            }, function (err) {
                //alert(err);
            });
        },
        submit: function () {
            var self = this;
            self.$http.post("/setting/update_user_value", {"id": self.$route.params.id ,"username": self.username,"company_name": self.company_name,"current_company": self.current_company, "email": self.email,
                "country_id": self.country_id, "sales": self.sales, "project": self.project, "inventory": self.inventory, "manufacturing": self.manufacturing,
                "accounting": self.accounting, "purchases": self.purchases, "recruitment": self.recruitment, "expenses": self.expenses, "timesheets": self.timesheets,
                "attendance": self.attendance, "fleet": self.fleet, "massmailing": self.massmailing, "pointofsale": self.pointofsale, "administration": self.administration ,
                "employees": self.employees, "language": self.language, "timezone": self.timezone,"officer": self.officer,"equipment_manager": self.equipment_manager,"manager": self.manager,
                "emailmessages": self.emailmessages , "alias": self.alias, "signature": self.signature, "barcode": self.barcode, "security_pin": self.security_pin }).then(function(res){
                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line

                this.submit();
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
        }
    },


    components: {
        DashboardController,
        Newuser

    }
}
