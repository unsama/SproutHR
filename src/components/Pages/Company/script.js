import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"


export default{
    created: function () {
        var self = this;
        var del = []; // initialize empty array
        document.title = this.title;
        this.select();
        $(function () {
            $("#action").hide();
            // $("#changepassword").click(function () {
            //     self.pwd_update();
            //     window.location.href = "/setting/users";
            // });
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
    },
    data(){
        return {
            head: "Companies",
            title: 'Companies - Sprout',
            btnlinks: {
                createbtnlink: "/setting/companycreate",
                importbtnlink: "/setting/companyimport",
                deletebtnlink: "",
                exportbtnlink: "",
                changepasswordbtnlink: "",
                changepasswordbtnlink_modal: "",
            },
            tableheader: [
                "ID",
                "Partner",
                "Company Name",



            ],
            tablefoot: [
                "",
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "ALU pak industries",
                        "alupak industries",

                    ],
                    "url": "/setting/companiesin"
                },
                "row1": {
                    "data": [
                        "My industries",
                        "my industries",
                        
                    ],
                    "url": "/setting/usersin"
                },
            }
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/setting/companytable", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.company_name,
                                val.company_name,
                            ],
                            "url": "/setting/companiesin/"+val.id,

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
            self.$http.post("/setting/delete_company_info", {"delete_items": del}).then(function(res){

                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
    },

    components: {
        DashboardController,
        Tabledrag

    }
}
