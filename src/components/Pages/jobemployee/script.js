import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pro from "./../../partials/Pro/Pro.vue"
import ProTwo from "./../../partials/ProTwo/ProTwo.vue"
export default{
    created: function () {
        var self = this;
        self.select();
        self.select1();
        $(function(){
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
        self.btnlinks.createbtnlink ="/recruitment/hremployeecreate/"+self.$route.params.id;
        self.btnlinks.secondbtnlink ="/recruitment/jobemployeetable/"+self.$route.params.id
        document.title = this.title;
    },
    data () {
        return {
            employeenames: [],
            num: '',
            counter: 1,
            nextactivity: "Employee",
            btnlinks: {
                createbtnlink:"",
                importbtnlink:"/imported",
                firstbtnlink: "/recruitment/jobemployee",
                secondbtnlink: "/recruitment/jobemployeetable"

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
                        "Availables",
                    ],
                    "url": "/#/app/sales/request_quotation_inner"
                },
            }
        }
    },
    methods: {
        select3: function () {
            var self = this;
            self.counter+=1;

            self.$http.post("/recruitment/empnext1", {"counter": self.counter,"id": self.$route.params.id}).then(function (res) {
                self.employeenames = res.body.data;
                console.log(self.employeenames);
            },function(err){
                alert(err);
            });

        },
        select4: function () {
            var self = this;
            self.counter-=1;
            self.$http.post("/recruitment/empback1", {"counter": self.counter,"id": self.$route.params.id}).then(function (res) {
                self.employeenames = res.body.data;
                console.log(self.employeenames);
            },function(err){
                alert(err);
            });


        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/numemp1", {"id": self.$route.params.id}).then(function (res) {
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
            self.$http.post("/recruitment/fetchEmployeeName1", {"id": self.$route.params.id}).then(function (res) {
                self.employeenames = res.body.result;
                console.log(self.employeenames);
            }, function (err) {
                alert(err);
            });
        },
    },
    components: {
        DashboardController,
        Pro,
        ProTwo,

    }
}
// import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import Pro from "./../../partials/Pro/Pro.vue"
//
// export default{
//
//     created: function () {
//         $(function(){
//             $('.samobuttopcontroller2').off('click');
//             $('.samobuttopcontroller2').on('click', function () {
//                 let check = $('#createform').css("display");
//                 if(check == "none"){
//                     $('#createform').show();
//                     $('#createedit').hide();
//                 }else{
//                     $('#createform').hide();
//                     $('#createedit').show();
//                 }
//
//             });
//         });
//         document.title = this.title;
//     },
//     data () {
//         return {
//             nextactivity: "Employees",
//             btnlinks: {
//                 createbtnlink:"#/app/attendance/Createemp",
//                 importbtnlink:"#/app/imported",
//                 secondbtnlink: "#/app/attendance/AttTableHr"
//             },
//             tableheader: [
//                 "Reference",
//                 "Destination Location Zone",
//                 "Partner",
//                 "Schduled Date",
//                 "Source Document",
//                 "Back Order Of",
//                 "Status",
//
//             ],
//             tabledata: {
//                 "row": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//
//                     ],
//                     "url": "/#/app/sales/request_quotation_inner"
//
//                 },
//                 "row1": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//
//                     ],
//                     "url": "/#/app/sales/request_quotation_inner"
//
//                 },
//                 "row2": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//
//                     ],
//                     "url": "/#/app/sales/request_quotation_inner"
//
//                 },
//
//             }
//         }
//     },
//
//
//     components: {
//         DashboardController,
//         Pro
//
//     }
// }