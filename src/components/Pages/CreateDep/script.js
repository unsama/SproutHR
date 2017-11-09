import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
import  TableMain from "./../../partials/TableMain/TableMain.vue"
import Contract from "./../../partials/Contract/Contract.vue"
import Contracting from "./../../partials/Contracting/Contracting.vue"
export default{
    created: function () {
        var self = this;
        self.select();
        self.select1();
        var del = []; // initialize empty array

        $(function(){


            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
        });
        $(function(){
            $("#action").hide();

            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }
                else{
                    $("#action").hide();
                    $(".printbtnDrop").hide();
                }
                // alert("check it");
            });

            $("#delete").click(function () {
                $(".checkBoxClass:checked").each(function(){
                    del.push($(this).val());

                });
                self.delete(del);
                self.select();

            });



            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#createform').css("display");
                if(check == "none"){
                    $('#createform').show();
                    $('#createedit').hide();
                }else{
                    $('#createform').hide();
                    $('#createedit').show();
                }

            });
        });
    },
    data(){
        return {
            num: '',
            btnlinks: {
                createbtnlink: "/employees/CreateContract",

                importbtnlink:"/employees/Importemp",
                exportbtnlink:""
            },
            tableheader: [
                "ID",
                " Contract Reference",
                " Employee",
                " Contract Type",
                " Job Title",
                " Working Schedule",
                " Start Date",
                " End Date",


            ],
            tabledata: {
                "row": {
                    "data": [

                        "contract",
                        "Hassan",
                        "Employee",
                        "Developer",
                        "",
                        "3/1/12",
                        "3/1/12",
                    ],


                },

            },
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",


            ],
            r: true,
            p: false,
            k: true,
            nextactivity: "Contracts",
            counter: 1,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },

    methods: {
        select3: function () {
            var self = this;
            self.counter+=5;
            self.$http.post("/employees/contract_tablenext", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.reference,
                                val.Employee,
                                val.Contract_Type,
                                val.job_tittle,
                                val.Working_Schedule,
                                val.Start_Date ,
                                val.End_Date ,
                            ],
                            "url": "/employees/contractone/"+val.id,

                        });
                    });
                }

            },function(err){
                alert(err);
            });
        },
        select4: function () {
            var self = this;
            self.counter-=5;
            self.$http.post("/employees/contract_tableback", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.reference,
                                val.Employee,
                                val.Contract_Type,
                                val.job_tittle,
                                val.Working_Schedule,
                                val.Start_Date ,
                                val.End_Date ,
                            ],
                            "url": "/employees/contractone/"+val.id,

                        });
                    });
                }

            },function(err){
                alert(err);
            });

        },
        select: function () {
            var self = this;
            self.$http.post("/Employees/putNewContractToTable", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.reference,
                                val.Employee,
                                val.Contract_Type,
                                val.job_tittle,
                                val.Working_Schedule,
                                val.Start_Date ,
                                val.End_Date ,
                            ],
                            "url": "/employees/contractone/"+val.id,

                        });
                    });
                }


            },function(err){
                //alert(err);
            });
        },
        pwd_update: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/setting/user_pwd_update", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        delete: function (del) {
            var self = this;
            //alert(self.current_company+ " ");
            console.log("a"+del);
            self.$http.post("/Employees/deleteEmployees", {"delete_items": del}).then(function(res){
                if(res){
                    self.select();
                }else {
                    alert("something went wrong");
                }

                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/Employees/countContract", {"id": self.$route.params.id}).then(function (res) {

                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log('value of num'+self.num);
                //console.log(this.$route.query.id);

            }, function (err) {

            });




        },
    },


    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Pin,
        Tableview,
        Contract,
        Contracting,
        TableMain,
        dashconterller: DashboardController

    }

}







