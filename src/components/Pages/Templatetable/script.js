import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"


export default{
    created: function () {
        var self = this;
        document.title = this.title;
        this.select();

    },
    data(){
        return {
            head: "Templates",
            title: 'Templates - Sprout',
            btnlinks: {
                createbtnlink: "/setting/templatetablecreate",
                importbtnlink: "/setting/templatetableimport",
            },
            templatename: "",
            templateactive: "",
            templatemodel: "",
            templatefilter: "",
            templateurl: "",
            templategdrivename: "",
            name: "",
            options2: "",
            tableheader: [
                "Template Name",
                "Model",



            ],
            tablefoot: [
                "",
                "",
                "",




            ],
            tabledata: {
                "row": {
                    "data": [
                        "template 1",
                        "partner 1",
                        "",
                        "",

                    ],
                    "url": "/setting/templatetablein"
                },
                "row1": {
                    "data": [
                        "template 2",
                        "partner 2",
                        "",
                        "",

                    ],
                    "url": "/setting/templatetablein"
                },
            }
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/setting/templateinfo", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.name,
                                val.model_id,
                            ],
                            "url": "/setting/templatetablein/"+val.id,

                        });
                    });
                    console.log(self.tabledata);
                }
                //self.options =res.body.data;

            },function(err){
                alert(err);
            });
        },
        delete: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/delete_users", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
    },

    components: {
        DashboardController,
        TableMain

    }
}
