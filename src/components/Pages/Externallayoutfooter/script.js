import DashboardController from "./../../partials/DashboardController/DashboardController.vue"


export default{
    created: function () {
        var self = this;
        this.select();
        document.title = this.title;
    },
    data () {
        return {
            activityimport: "",
            btnlinks: {
                createbtnlink: "/setting/externallayoutfootercreate",
                editbtnlink: "/setting/externallayoutfooteredit",
            },
            viewname:"",
            viewtype:"",
            model:"",
            sequence:"",
            active:"",
            ckeditor:"",
        }
    },
    methods: {
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/setting/externalfooterinfo", {"type":'externalfooter'}).then(function (res) {

                var parentdata = res.body.result[0];
                self.viewname = parentdata.name;
                self.viewtype = parentdata.view_type;
                self.model = parentdata.model;
                self.sequence = parentdata.sequence;
                self.active = parentdata.active;
                self.ckeditor = parentdata.archicture;
                //console.log(self.status);
                //console.log(this.$route.query.id);
                self.$http.post("/alias_value", {"alias_id": self.alias_id}).then(function (res) {
                    console.log(res.body);
                    var parentdata = res.body.result[0];
                    self.name = parentdata.name;

                }, function (err) {
                    //alert(err);
                });

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
    }
}
