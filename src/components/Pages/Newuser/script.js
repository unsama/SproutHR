import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
export default{
    created: function () {
        var self = this;
        console.log("this is some check");
        $(function () {
            $("#save").click(function () {
                self.$validator.validateAll().then(result => {
                    if (!result) {
                        // validation failed.
                    }
                    self.submit();
                    alert('aaa')
                    window.location.href = "../setting/users";
                });
            });
            $('#submitSaveBtn').on("click",function(){

            });
            CKEDITOR.replace( 'editor1' );
        });
        this.select();
    },
    data(){
        return {
            title: 'Discuss',
            username: '',
            email: '',
            password: '',
            company_name: '',
            current_company: '',
            sales: '',
            project: '',
            inventory: '',
            manufacturing: '',
            accounting: '',
            purchases: '',
            recruitment: '',
            expenses: '',
            timesheets: '',
            attendance: '',
            fleet: '',
            massmailing: '',
            pointofsale: '',
            administration: '',
            employees: '',
            officer: '',
            equipment_manager: '',
            manager: '',
            country_id: '1',
            options:'',
            language:'',
            timezone:'',
            emailmessages:'',
            alias:'',
            signature:'',
            options2:'',
            barcode:'',
            security_pin:'',
            v: true,
            v1: false


        }
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
            self.$http.post("/setting/source", {"company_name": self.company_name}).then(function(res){self.options =res.body.data;},function(err){
                //alert(err);
            });
            self.$http.post("/setting/get_alias", {"name": self.name}).then(function(res){self.options2 =res.body.data;},function(err){
                //alert(err);
            });
        },
        submit: function () {
            //alert("adasdsadsad");
            var self = this;
            //var ckeditor_value = CKEDITOR.instances.editor1.getData();
            //alert(self.current_company+ " ");
            self.$http.post("/setting/add_user", {
                "username": self.username,
                "company_name": self.company_name,
                "current_company": self.current_company,
                "email": self.email,
                "country_id": self.country_id,
                "sales": self.sales,
                "project": self.project,
                "inventory": self.inventory,
                "manufacturing": self.manufacturing,
                "accounting": self.accounting,
                "purchases": self.purchases,
                "recruitment": self.recruitment,
                "expenses": self.expenses,
                "timesheets": self.timesheets,
                "attendance": self.attendance,
                "fleet": self.fleet,
                "massmailing": self.massmailing,
                "pointofsale": self.pointofsale,
                "administration": self.administration ,
                "employees": self.employees,
                "language": self.language,
                "timezone": self.timezone,
                "officer": self.officer,
                "equipment_manager": self.equipment_manager,
                "manager": self.manager,
                "emailmessages": self.emailmessages ,
                "alias": self.alias,
                //"signature": ckeditor_value,
                "barcode": self.barcode,
                "security_pin": self.security_pin
            }).then(function(res){
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
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Pin,
        Tableview,
        TableMain,
        DashboardController

    }

}