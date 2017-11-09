import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Templatetableincompo from "./../../partials/Templatetableincompo/Templatetableincompo.vue"

export default{
    created: function () {
        var self = this;
        self.select();
        document.title = this.title;

    },
    data(){
        return {
            head: "Templates / Partner Review",
            title: 'Partner Review - Sprout',
            btnlinks: {
                createbtnlink: "/setting/templatetablecreate",
                editbtnlink: "/setting/templatetableedit",
            },
            templatename:"",
            active:"",
            name_e:"",
            filter_name:"",
            template_url:"",
            gdrive_name_pattern:"",
            model_description:"",

        }
    },
    methods: {
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/setting/templateininfo", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.result[0];
                console.log(parentdata);
                self.name_e = parentdata.name;
                self.filter_name = parentdata.filter_name;
                self.template_url = parentdata.template_url;
                self.gdrive_name_pattern = parentdata.gdrive_name_pattern;
                self.model_description = parentdata.model_description;
                self.active = parentdata.active;
                console.log(parentdata);
                //console.log(this.$route.query.id);


            }, function (err) {
                // alert(err);
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

    },

    components: {
        DashboardController,
        Templatetableincompo

    }
}
