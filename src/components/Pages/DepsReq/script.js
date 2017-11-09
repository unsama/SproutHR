import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
export default{

    created: function () {
        var self = this;
        this.select();
        this.select1();
        var del = [];
        document.title = this.title;
        $(function(){
            $("#action").hide();
            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }else{
                    $("#action").hide();
                }
            });
            $(".delete").click(function () {
                $(".checkBoxClass:checked").each(function(){
                    del.push($(this).val());

                });
                console.log(del);
                self.delete(del);
                this.select();
                this.select1();
            });

            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
        });

    },
    data(){
        return {
            btnlinks: {
                createbtnlink:"/recruitment/ReqDepcreate",
                importbtnlink:"/recruitment/ReqDepImport",
                editbtnlink:"#/app/attendance/Pin",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
            },
            tableheader: [
                " ID",
                " Display Name",
                " Manager",
                " ParentDepartment",
                "",
            ],
            tablefooter:[
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
                        "Asad",
                        "Alupak",
                        "khan",
                        "Leaves",
                        

                    ],
                    "url": "/recruitment/ReqDep"
                },
            },
            r: true,
            p: false,
            k: true,
            nextactivity: "Departments",
            manager: '',
            managername: '',
            parentdep: '',
            num: '',
            counter: 0,
            parentdepname: '',
            title : "Departments - Sprout",
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637."',
            v: false,
        }
    },
    methods: {
        delete: function (del) {
            var self = this;
            //alert(self.current_company+ " ");
            console.log("a"+del);
            self.$http.post("/recruitment/delete_dep", {"delete_items": del}).then(function(res){

            },function(err){
                //alert(err);
            });
            this.select();
            this.select1();
        },
        select3: function () {
            var self = this;
            self.counter+=10;
            self.$http.post("/recruitment/depnext", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.DepartmentName1,
                                val.employeename,
                                val.DepartmentName2,

                                ""
                            ],
                            "url": "/recruitment/ReqDep/"+val.id,

                        });
                        console.log(data);
                    });
                }

            },function(err){
                alert(err);
            });
        },
        select4: function () {
            var self = this;
            self.counter-=10;
            self.$http.post("/recruitment/depback", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.DepartmentName1,
                                val.employeename,
                                val.DepartmentName2,

                                ""
                            ],
                            "url": "/recruitment/ReqDep/"+val.id,

                        });
                        console.log(data);
                    });
                }

            },function(err){
                alert(err);
            });

        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/numdep", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                console.log(self.num)
                //console.log(this.$route.query.id);
            }, function (err) {
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/dep", {
                "name": self.options,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.DepartmentName1,
                                val.employeename,
                                val.DepartmentName2,
                                ""
                            ],
                            "url": "/recruitment/ReqDep/"+val.id,

                        });
                        console.log(data);
                    });
                }

            },function(err){
                alert(err);
            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                // this.submiting();
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },
    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Pin,
        Tableview,
        TableMain,
        DashboardController

    }

}







