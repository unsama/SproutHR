import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import incomingmailservercreatecompo from "./../../partials/incomingmailservercreatecompo/incomingmailservercreatecompo.vue"



export default{
    created: function () {
        var self = this;
        $(function() {
            $("#save").click(function () {
                self.submit();
            });
        });
    },
    props: [
        "edit",
    ],
    data () {
        return {
            title:"Incoming Mail Servers - Sprout",
            btnlinks: {
                savebtnlink:"",
                discardbtnlink:"/setting/incomingmailserver"
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
        submit: function () {
            var self = this;
            self.$http.post("/setting/incomingmail", {
                "name": self.name,
                "server_type": self.servertype,
                "server_name": self.servername,
                "port": self.port,
                "ssl": self.ssl,
                "usernam_e": self.username,
                "passwor_d": self.password,
                "status": self.status,
            }).then(function(res){
                console.log(res.body);
                alert(self.portalaccess);
            },function(err){
                alert(err);
            });
        },

        // validateBeforeSubmit() {
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         this.submit();
        //         alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //         alert('Correct them errors!');
        //     });
        // },
        // validateBeforeSubmit() {
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         this.submitpaper();
        //         alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //         alert('Correct them errors!');
        //     });
        // }


    },

    components: {
        DashboardController,
        incomingmailservercreatecompo
    }



}


