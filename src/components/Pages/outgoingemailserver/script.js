import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"



export default{
    created: function () {
        var self = this;
        var del = [];
        document.title = this.title;
        $(function () {
            $("#action").hide();
            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }else{
                    $("#action").hide();
                }
                // alert("check it");
            });
            $("#delete").click(function () {
                $(".checkBoxClass:checked").each(function(){
                    del.push($(this).val());
                    // self.btnlinks.deletebtnlink = "/setting/users/"+del;
                    // self.delete();
                });
                console.log(del);
                self.delete(del);
                alert(del);
            });
        });
        this.select();
    },
    data () {
        return {
            title:"Outgoing Mail Servers - Sprout",
            head: "General Settings / Outgoing Mail Servers",
            btnlinks: {
                createbtnlink:"/setting/outgoingemailservercreate",
                importbtnlink:"/setting/outgoingemailserverimport",
                deletebtnlink: "",
                exportbtnlink: "",
                changepasswordbtnlink: "",
                changepasswordbtnlink_modal: "",
            },
            tableheader: [
                "Id",
                "Priority",
                "Decsription",
                "SMTP Server",
                "User name",
                "Connection Security",

            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "10",
                        "localhost",
                        "localhost",
                        "ada",
                        "TLS (STARTTLS)",

                    ],
                    "url": "/setting/outgoingemailserverin"
                },
            }
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/setting/outgoingtable", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.priority,
                                val.description,
                                val.smtp_server,
                                val.username,
                                val.connection_security,
                            ],
                            "url": "/setting/outgoingemailserverin/"+val.id,

                        });
                    });
                    console.log(self.tabledata);
                }
                //self.options =res.body.data;

            },function(err){
                alert(err);
            });
        },
        delete: function (del) {
            var self = this;
            //alert(self.current_company+ " ");
            console.log("a"+del);
            self.$http.post("/setting/delete_outgoing", {"delete_items": del}).then(function(res){

                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
    },


    components: {
        DashboardController,
        Tablemain


    }
}