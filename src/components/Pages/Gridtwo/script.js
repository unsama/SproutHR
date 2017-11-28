import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pro from "./../../partials/Pro/Pro.vue"
import ProTwo from "./../../partials/ProTwo/ProTwo.vue"

export default{

    created: function () {
        var self = this;
        self.select();
        //self.select1();

        $(function(){
            $(".archivedpagi").hide();
            $(".firstpagi").show();
            $("#archived").click(function () {
                $(".archivedpagi").show()
                $(".firstpagi").hide()
            });
            $("#archived").click(function () {
                self.selectArcivedEmployees();
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
        document.title = this.title;
    },
    data () {
        return {
            employeenames: [],
            num:'',
            counter: 1,
            nextactivity: "Employees",
            btnlinks: {
                createbtnlink:"/employees/CreateDepone",
                importbtnlink:"#/app/imported",
                secondbtnlink: "/Employees/TableHr",
                firstbtnlink: "/Employees/",
                archivebtnlink: "",
            },
            tableheader: [
                "Reference",
                "Destination Location Zone",
                "Partner",
                "Schduled Date",
                "Source Document",
                "Back Order Of",
                "Status",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },

            }
        }
    },

    methods: {
        selectArcivedEmployees: function () {
          var self = this;
          self.$http.post("/employees/fetchArchived").then(function (res){
              self.employeenames  = res.body.result;
          });
            self.$http.post("/Employees/countArchivedEmployees").then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log('value of num'+self.num);
                //console.log(this.$route.query.id);

            }, function (err) {

            });
        },
        addFollowers: function () {
        },

        select: function () {
            var self = this;
            self.$http.post("/employees/fetchEmployeeName").then(function (res) {
                self.employeenames = res.body.result;
            }, function (err) {
                alert(err);
            });
            self.$http.post("/Employees/countActiveEmployees").then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log('value of num'+self.num);
            }, function (err) {

            });
        },
        select3: function () {
            var self = this;
            self.counter+=3;
            self.$http.post("/employees/activeEmployeeGridNext", {
                "counter": self.counter,
            }).then(function(res){
                self.employeenames = res.body.result;
            }, function (err) {
                alert(err);
            });
        },
        select5: function () {
            var self = this;
            self.counter+=3;
            self.$http.post("/employees/archivedEmployeeGridNext", {
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
            self.$http.post("/employees/activeEmployeeGridBack", {
                "counter": self.counter,
            }).then(function(res){
                self.employeenames = res.body.result;
            }, function (err) {
                alert(err);
            });

        },
        select6: function () {
            var self = this;
            self.counter-=3;
            self.$http.post("/employees/archivedEmployeeGridBack", {
                "counter": self.counter,
            }).then(function(res){
                self.employeenames = res.body.result;
            }, function (err) {
                alert(err);
            });

        },
        // select1: function () {
        //     var self = this;
        //     self.$http.post("/Employees/countEmployees").then(function (res) {
        //         var parentdata = res.body.data[0];
        //         self.num = parentdata.count;
        //         console.log('value of num'+self.num);
        //         //console.log(this.$route.query.id);
        //
        //     }, function (err) {
        //
        //     });
        // },
    },


    components: {
        DashboardController,
        Pro,
        ProTwo,

    }
}