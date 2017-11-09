import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"


export default{
    created: function () {
        var self = this;
        var del = []; // initialize empty array
        document.title = this.title;
        this.select();
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



    },
    data(){
        return {
            head: "Users / assigned task",
            title: 'Users - Sprout',
            options: '',
            btnlinks: {
                createbtnlink: "/setting/assignedtaskcreate",
                importbtnlink: "/setting/usersimport",
                deletebtnlink: "",
            },
            tableheader: [
                "ID",
                "Task Title",
                "Project",
                "Assigned to",
                "Stage",

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

                    ],
                    "url": "/recruitment/ReqDep"


                },

            },
        };
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/setting/assigned_task_table", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.task_tittle,
                                val.name,
                                val.username,
                                val.stages
                            ],
                            "url": "/setting/assignedview/"+val.id,

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
            console.log("aa"+del);
            self.$http.post("/setting/user_assigned_task", {"delete_items": del}).then(function(res){

                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },

    },



    components: {
        DashboardController,
        TableMain

    }
};

