import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProTwo from "./../../partials/ProTwo/ProTwo.vue"
import Pro from "./../../partials/Pro/Pro.vue"

export default{
    created: function () {
        var self = this;
        self.select();
        $(function () {


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
                createbtnlink: "/Employees/DepNew",
                discardbtnlink: "#/app/sales/Salesnextactivityview",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        select: function () {
            console.log("Inside select() ");
            var self = this;
            self.$http.post("/employees/fetchDepartmentEmployees", {"id": self.$route.params.id}).then(function (res) {
                self.employeenames = res.body.result;
                console.log(self.employeenames);

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