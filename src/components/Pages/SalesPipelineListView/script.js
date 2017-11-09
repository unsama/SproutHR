import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#aview').css("display");
                if(check == "none"){
                    $('#aview').show();
                    $('#aedit').hide();
                }else{
                    $('#aview').hide();
                    $('#aedit').show();
                }

            });
        });

    },
    data () {
        return {
            customers: "Your Pipeline",
            title: "Your Pipeline",
            btnlinks: {
                createbtnlink:"/sales/newuser",
                importbtnlink: "/sales/salescustomerimport",
                firstbtnlink:"/sales/pipeline",
                secondbtnlink:"/sales/salespipelinelistview"
            },
            tableheader: [
                "Create Date",
                "Opportunity",
                "Customer",
                "Country",
                "Next Activity Summery",
                "Next Activity Date",
                "Stage",
                "Expected Revenue",
                "Probabilty",
                "Sales Team",
                "Salesperson",

            ],
            tablefooter:[
              "",
              "",
              "",
              "",
              "",
              "",
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
                        "03/10/2017 05:24:04",
                        "Need to customize the solution",
                        "Delta PC",
                        "United Kingdom",
                        "03/08/2017",
                        "Conf call with technical service",
                        "adasd",
                        "0.00",
                        "10.00",
                        "Direct Sales",
                        "Administrators",
                    ],
                    "url": "/sales/salesactivityview"

                },
                "row1": {
                    "data": [
                        "03/10/2017 05:24:04",
                        "Need to customize the solution",
                        "Delta PC",
                        "United Kingdom",
                        "03/08/2017",
                        "Conf call with technical service",
                        "adasd",
                        "0.00",
                        "10.00",
                        "Direct Sales",
                        "Administrators",
                    ],
                    "url": "/sales/salesactivityview"

                },
                "row2": {
                    "data": [
                        "03/10/2017 05:24:04",
                        "Need to customize the solution",
                        "Delta PC",
                        "United Kingdom",
                        "03/08/2017",
                        "Conf call with technical service",
                        "adasd",
                        "0.00",
                        "10.00",
                        "Direct Sales",
                        "Administrators",
                    ],
                    "url": "/sales/salesactivityview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}