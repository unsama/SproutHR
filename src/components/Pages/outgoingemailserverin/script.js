import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import outgoingemailservereditcompo from "./../../partials/outgoingemailservereditcompo/outgoingemailservereditcompo.vue"


export default{
    created: function () {
        var self = this;
        this.select();
        $(function () {
            $("#changepassword").click(function () {
                self.pwd_update();
                window.location.href = "/setting/users";
            });
            $("#delete").click(function () {
                var r = confirm("are you sure delete");
                if (r) {
                    window.location.href = "../outgoingemailserver";
                    self.submit_inside();
                } else {
                    // x="You pressed Cancel!";
                }

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
            self.btnlinks.editbtnlink = "/setting/outgoingemailserveredit/"+self.$route.params.id;
            self.select();
            self.submit();

        });
        document.title = this.title;
    },

    data(){
        return {
            title:"New - Sprout",
            head: "General Settings / Outgoing Mail Servers / New",
            btnlinks: {
                editbtnlink:"/setting/outgoingemailserveredit",
                createbtnlink:"/setting/outgoingemailservercreate"
            },
            Description: '',
            Priority: '',
            smtpServer: '',
            smtpport: '',
            Security: '',
            Username: '',
            Password: '',
            status: '',
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
            self.$http.post("/setting/outgoinginfo", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.result[0];
                self.Description = parentdata.description;
                self.Priority = parentdata.priority;
                self.smtpServer = parentdata.smtp_server;
                self.smtpport = parentdata.smtp_port;
                self.Security = parentdata.connection_security;
                self.Username = parentdata.username;
                self.Password = parentdata.password;
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
        submit_inside: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/delete_outgoing_inside", {"id": self.$route.params.id }).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },

    },
    components: {
        DashboardController,
        outgoingemailservereditcompo

    }

}
