import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProTwo from "./../../partials/ProTwo/ProTwo.vue"
import Pro from "./../../partials/Pro/Pro.vue"

export default{
    created: function () {
        var self = this;
        self.select();
        $(function () {

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

            p: "Departments",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "",//Employees/DepNew",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported",
                secondbtnlink: ""//Employees/TableDep"
            },
        }
    },
    methods: {
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