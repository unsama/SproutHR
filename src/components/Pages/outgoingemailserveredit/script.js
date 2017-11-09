import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import outgoingemailservercreatecompo from "./../../partials/outgoingemailservercreatecompo/outgoingemailservercreatecompo.vue"



export default{
    created: function () {
        var self = this;
        this.select();
        $(function () {
            self.btnlinks.discardbtnlink = "/setting/outgoingemailserverin/"+self.$route.params.id;

        });
        document.title = this.title;
    },
    data () {
        return {
            title:"New - Sprout",
            head: "General Settings / Outgoing Mail Servers / New",
            btnlinks: {
                savebtnlink:"",
                discardbtnlink:""
            },
            description_e: "",
            priority_e: "",
            smtp_server_e: "",
            smtp_port_e: "",
            connection_security_e: "",
            username_e: "",
            password_e: "",

        };
    },

    methods: {
        testsmtp: function () {
            var self = this;
            self.$http.get("/setting/testsmtp", {
                "descriptio_n": self.description,
                "priorit_y": self.priority,
                "smtpserver": self.smtp_server,
                "smtpport": self.smtp_port,
                "connectionsecurity": self.connection_security,
                "usernam_e": self.username,
                "passwor_d": self.password,
            }).then(function(res){
                if(res.body.status == "error") {
                    alert("passs ho gaya");
                }
                else {
                    alert("pappu fail ho gaya");
                }
            },function(err){
                alert(err);
            });
        },
        submit: function () {
            var self = this;
            self.$http.post("/setting/outgoing_update", {
                "id": self.$route.params.id,
                "description_e": self.description_e,
                "priority_e": self.priority_e,
                "smtp_server_e": self.smtp_server_e,
                "smtp_port_e": self.smtp_port_e,
                "connection_security_e": self.connection_security_e,
                "username_e": self.username_e,
                "password_e": self.password_e,
            }).then(function(res){
                console.log(res.body);
                alert(self.portalaccess);
            },function(err){
                alert(err);
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/setting/outgoint_edif_service", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.result[0];
                self.description_e = parentdata.description;
                self.priority_e = parentdata.priority;
                self.smtp_server_e = parentdata.smtp_server;
                self.smtp_port_e = parentdata.smtp_port;
                self.connection_security_e = parentdata.smtp_serconnection_securityver;
                self.username_e = parentdata.username;
                self.password_e = parentdata.password;

                console.log(parentdata);
                //console.log(self.status);
                //console.log(this.$route.query.id);

            }, function (err) {
                //alert(err);
            });
        },



    },
    components: {
        DashboardController,
        outgoingemailservercreatecompo
    }
}