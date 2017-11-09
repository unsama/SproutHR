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
        var del = []; // initialize empty array
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
                self.delete(del);
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
                createbtnlink:"/attendance/attendance_creates",
                importbtnlink:"/attendance/Newimport",
                editbtnlink:"#/app/attendance/Pin",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
            },
            tableheader: [
                "ID",
                "Employee",
                "Check IN",
                "Check Out",
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
            counter: 1,
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
            self.$http.post("/recruitment/delete_attendance", {"delete_items": del}).then(function(res){
                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        select3: function () {
            var self = this;
            self.counter+=1;
            self.$http.post("/recruitment/attendance_tablenext", {
                "counter": self.counter,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.date);
                        var dt = j_date.getDate();
                        console.log("dates"+dt);
                        // j_date.getDate()+"-"+j_date.getMonth()+"-"+j_date.getFullYear()
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.employeename,
                                val.CheckIn,
                                val.CheckOut,
                                ""
                            ],
                            "url": "/attendance/select_attendance_info/"+val.emp_id+"/"+dt,

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
            self.counter-=1;
            self.$http.post("/recruitment/attendance_tableback", {
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
                                val.employeename,
                                val.CheckIn,
                                val.CheckOut,
                                ""
                            ],
                            "url": "/attendance/select_attendance_info/"+val.emp_id+"/asdsa",
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
            self.$http.post("/recruitment/numatt", {"id": self.$route.params.id}).then(function (res) {
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
            self.$http.post("/recruitment/attendance_table", {
                "name": self.options,
            }).then(function(res){
                var data = res.body.data;
                self.j = data.name;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.date);
                        var dates=j_date.getDate();
                        var month=j_date.getMonth()+1;
                        var year=j_date.getFullYear();
                        console.log(dates);
                        console.log(month);
                        console.log(year);
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.employeename,
                                val.CheckIn,
                                val.CheckOut
                            ],
                            "url": "/attendance/select_attendance_info/"+val.emp_id+"/"+ year+"-"+month+"-"+dates,
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
                alert('From Submitted!');
            }).catch(() => {

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







