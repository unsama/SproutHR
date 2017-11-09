import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import incomingmailservercreatecompo from "./../../partials/incomingmailservercreatecompo/incomingmailservercreatecompo.vue"



export default{
    created: function () {
        var self = this;
        this.select();
        document.title = this.title;
        $("#delete").click(function () {
            var r = confirm("are you sure delete");
            if (r) {
                window.location.href = "../incomingmailserver";
                self.submit_inside();
            } else {
                // x="You pressed Cancel!";
            }

        });
        self.select();
        self.btnlinks.discardbtnlink = "/setting/incomingmailserverin/"+self.$route.params.id;
        self.submit();

    },
    data () {
        return {
            title:"New - Sprout",
            head: "General Settings / Incoming Mail Servers / New",
            btnlinks: {
                savebtnlink:"",
                discardbtnlink:"",
            },
            name: "",
            servertype: "",
            servername: "",
            port: "",
            ssl: "",
            username: "",
            password: "",
            newrecord: "",
            status:"not confirmed",


        }
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
        // submit: function () {
        //     var self = this;
        //     self.$http.post("/setting/incoming_update", {
        //         "id": self.$route.params.id,
        //         "name": self.name,
        //         "servertype": self.servertype,
        //         "servername": self.servername,
        //         "port": self.port,
        //         "ssl": self.ssl,
        //         "username": self.username,
        //         "password": self.password,
        //         "newrecord": self.newrecord,
        //         "status": self.status,
        //     }).then(function(res){
        //         console.log(res.body);
        //         alert(self.portalaccess);
        //     },function(err){
        //         alert(err);
        //     });
        // },
        select: function () {
            var self = this;
            self.$http.post("/setting/incoming_edit_service", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.result[0];
                self.name = parentdata.name;
                self.servertype = parentdata.servertype;
                self.servername = parentdata.servername;
                self.port = parentdata.port;
                self.ssl = parentdata.ssl;
                self.username = parentdata.username;
                self.password = parentdata.password;
                self.newrecord = parentdata.newrecord;
                self.status = parentdata.status;

                console.log(parentdata);
                //console.log(self.status);
                //console.log(this.$route.query.id);

            }, function (err) {
                //alert(err);
            });
        },
        submit_inside: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/delete_incoming_inside", {"id": self.$route.params.id }).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },


    },

    components: {
        DashboardController,
        incomingmailservercreatecompo


    }
}