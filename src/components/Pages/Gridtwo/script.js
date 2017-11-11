import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pro from "./../../partials/Pro/Pro.vue"
import ProTwo from "./../../partials/ProTwo/ProTwo.vue"

export default{

    created: function () {
        var self = this;
        self.select();
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
        document.title = this.title;
    },
    data () {
        return {
            employeenames: [],

            nextactivity: "Employees",
            btnlinks: {
                createbtnlink:"/employees/CreateDepone",
                importbtnlink:"#/app/imported",
                secondbtnlink: "/Employees/TableHr",
                firstbtnlink: "/Employees/",
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
        select: function () {
            var self = this;
            self.$http.post("/employees/fetchEmployeeName", {"id": self.$route.params.id}).then(function (res) {
                self.employeenames = res.body.result;
                console.log("Employees List!!!!!!!!!!!!!");
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