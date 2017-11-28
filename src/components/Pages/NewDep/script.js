import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProTwo from "./../../partials/ProTwo/ProTwo.vue"
import Pro from "./../../partials/Pro/Pro.vue"

export default{
    created: function () {
        var self = this;
        self.select();
        $(function () {
            $(".archivedpagi").hide();
            $(".firstpagi").show();
            $("#archived").click(function () {
                $(".archivedpagi").show()
                $(".firstpagi").hide()
            });
            $("#archived").click(function () {
                self.selectArcivedEmployees();
            });
            self.btnlinks.secondbtnlink = "/Employees/DepttEmpTab/"+self.$route.params.id;
            self.btnlinks.createbtnlink = "/Employees/DepNew/"+self.$route.params.id;
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });
        });


    },
    data () {
        return {
            employeenames: [],
            counter:1,
            num:'',

            p: "Departments",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "",//Employees/DepNew",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: "",//Employees/TableDep"
                archivebtnlink: "",
            },
        }
    },
    methods: {
        select3: function () {
            var self = this;
            self.counter+=3;
            self.$http.post("/employees/DeptActiveEmployeeGridNext", {
                "counter": self.counter, "id":self.$route.params.id,
            }).then(function(res){
                self.employeenames = res.body.result;
            }, function (err) {
                alert(err);
            });
        },
        select5: function () {
            var self = this;
            self.counter+=3;
            self.$http.post("/employees/DeptArchivedEmployeeGridNext", {
                "counter": self.counter,
            }).then(function(res){
                self.employeenames = res.body.result;
            }, function (err) {
                alert(err);
            });
        },
        select4: function () {
            var self = this;
            self.counter-=3;
            self.$http.post("/employees/DeptActiveEmployeeGridBack", {
                "counter": self.counter, "id": self.$route.params.id,
            }).then(function(res){
                self.employeenames = res.body.result;
            }, function (err) {
                alert(err);
            });

        },
        select6: function () {
            var self = this;
            self.counter-=3;
            self.$http.post("/employees/DeptArchivedEmployeeGridBack", {
                "counter": self.counter, "id": self.$route.params.id,
            }).then(function(res){
                self.employeenames = res.body.result;
            }, function (err) {
                alert(err);
            });

        },
        selectArcivedEmployees: function () {
            var self = this;
            self.$http.post("/employees/fetchDeptArchivedEmployeesForGrid",{"id":self.$route.params.id}).then(function (res){
                self.employeenames  = res.body.result;
            });
            self.$http.post("/Employees/countDeptArchivedEmployees",{"id":self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log('value of num'+self.num);
                //console.log(this.$route.query.id);

            }, function (err) {

            });
        },
        select: function () {
            
            var self = this;
            self.$http.post("/employees/fetchDepartmentEmployees", {"id": self.$route.params.id}).then(function (res) {
                self.employeenames = res.body.result;
                console.log("self.employeenames");
                console.log(self.employeenames);
                if(self.employeenames.length == 0){
                    $("#emptyDept").show();
                    $("#notEmptyDept").hide();
                }
                else{
                    $("#emptyDept").hide();
                    $("#notEmptyDept").show();
                }


                // self.$http.post("/Employees/fetchJobTitles", {"id":self.job_tittle}).then(function (res) {
                //     var data = res.body.data[0];
                //     self.jobtitle = data.job_tittle;

            }, function (err) {
                alert(err);
            });


        },
    },


    components: {
        DashboardController,
        //Pro,
        ProTwo,


    }

}