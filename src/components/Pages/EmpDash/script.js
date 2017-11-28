import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        var self = this;
        self.select();
        // self.select1();
        $(function () {
            $(".archivedpagi").hide();
            $(".firstpagi").show();
            $("#archived").click(function () {
                $(".archivedpagi").show()
                $(".firstpagi").hide()
            });
            $("#archived").click(function () {
                self.selectArcivedDepartments();
            });
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });

            $("#save").click(function(){
                this.select();
            });

            $(document).ready(function(){

                // for(var i =0 ; i<=document.querySelectorAll('.szliderbar').length;i++) {
                //     var szazalek = Math.round((self.names[i].hiredemployees  * 100) / self.names[i].expected);
                //     console.log("hired"+self.names[i].hiredemployees);
                //     console.log("excepted"+self.names[i].expected);
                //     console.log("szazalek"+szazalek);
                //     console.log(i);
                //     document.getElementsByClassName('szliderbar')[i].style.width = szazalek + '%';
                //     document.getElementsByClassName('szazalek')[i].innerHTML = szazalek + '%';
                // }
                for(var i =0 ; i<=self.names.length;i++) {
                    var szazalek = Math.round((self.names2[i].hiredemployees  * 100) / self.names2[i].expected);
                    console.log("hired"+self.names2[i].hiredemployees);
                    console.log("excepted"+self.names2[i].expected);
                    console.log("szazalek"+szazalek);
                    console.log(i);
                    document.getElementsByClassName('szliderbar')[i].style.width = szazalek + '%';
                    document.getElementsByClassName('szazalek')[i].innerHTML = szazalek + '%';
                }

                $("button").click(function(){
                    $().appendTo("p");
                });


            });


        });


    },
    data () {
        return {

            names: [],
            names2: [],
            num:'',
            counter:1,

            nextactivity: "Departments",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "/employees/Dep",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: "/Employees/TableDep",
                archivebtnlink: "",
            },
            
        }
    },

    methods: {
        selectArcivedDepartments: function () {
            var self = this;
            self.$http.post("/employees/fetchArchivedDepartment").then(function (res){
                self.names  = res.body.result;
            });
            self.$http.post("/Employees/countArchivedEmployees").then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log('value of num'+self.num);
                //console.log(this.$route.query.id);

            }, function (err) {

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/employees/fetchdeparments", {"id": self.$route.params.id}).then(function (res) {
                self.names = res.body.result;
                console.log(self.names);
            }, function (err) {
                alert(err);
            });
            self.$http.post("/Employees/numdep", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {

            });

            self.$http.post("/employees/fetchDeptTotalAndAbsentEmployees", {"id": self.$route.params.id}).then(function (res) {
                self.names2 = res.body.result;
                console.log(self.names2);
            }, function (err) {
                alert(err);
            });

        },
        select3: function () {
            var self = this;
            self.counter+=6;
            self.$http.post("/employees/departmentGridNext", {
                "counter": self.counter,
            }).then(function(res){
                self.names = res.body.result;
            }, function (err) {
                alert(err);
            });
        },
        select5: function () {
            var self = this;
            self.counter+=6;
            self.$http.post("/employees/archivedDepartmentGridNext", {
                "counter": self.counter,
            }).then(function(res){
                self.names = res.body.result;
            }, function (err) {
                alert(err);
            });
        },

        select4: function () {
            var self = this;
            self.counter-=6;
            self.$http.post("/employees/departmentGridBack", {
                "counter": self.counter,
            }).then(function(res){
                self.names = res.body.result;
            }, function (err) {
                alert(err);
            });

        },
        select6: function () {
            var self = this;
            self.counter-=6;
            self.$http.post("/employees/archivedDepartmentGridBack", {
                "counter": self.counter,
            }).then(function(res){
                self.names = res.body.result;
            }, function (err) {
                alert(err);
            });

        },

        // select1: function () {
        //     var self = this;
        //     self.$http.post("/Employees/numdep", {"id": self.$route.params.id}).then(function (res) {
        //         var parentdata = res.body.data[0];
        //         self.num = parentdata.count;
        //     }, function (err) {
        //
        //     });
        // },

    },


    components: {
        DashboardController



    }

}