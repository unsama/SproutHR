import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/TableMain/TableMain.vue"



export default{
    created: function () {
        var self = this;
        document.title = this.title;
        this.select();
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
    },
    data () {
        return {
            title:"Incoming Mail Servers - Sprout",
            head: "General Settings / Incoming Mail Servers",
            btnlinks: {
                createbtnlink:"/setting/incomingmailservercreate",
                importbtnlink:"/setting/incomingmailserverimport"
            },
            tableheader: [
                "Name",
                "Server type",
                "SSL/TLS",
                "Create a new Record",
                "Last Fetch Data",
                "# of emails",
                "Status",

            ],
            tablefoot: [
                "",
                "",
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
                        "usama",
                        "POP server",
                        "",
                        "ada",
                        "TLS (STARTTLS)",
                        "0 records",
                        " not",

                    ],
                },
            }
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/setting/incomingtable", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.name,
                                val.server_type,
                                val.ssl_tsl,
                                val.server_type	,
                                val.last_fetched_date,
                                val.port,
                                val.status,
                            ],
                            "url": "/setting/incomingmailserverin/"+val.id,
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
            self.$http.post("/setting/delete_incoming", {"delete_items": del}).then(function(res){

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