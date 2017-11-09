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
            customers: "Vendor Bills",
            title: "Vendor Bills - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/customercreate",
                importbtnlink: "/accounting/saleableproductimport",
                firstbtnlink:"/accounting/accountsaleableproduct",
                secondbtnlink:"/accounting/saleablelistview"
            },
            tableheader: [
                "Vendor Bills",
                "Bill Date",
                "Number",
                "Vendor Refrence ",
                "Company",
                "Due Date",
                "Source Doucment",
                "Total",
                "To Pay",
                "Status",

            ],
            tablefooter: [
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
                        "Agrolait",
                        "+32 10 588 558",
                        "700.00	",
                        "700.00	",
                        "All / Expenses",
                        "Service",
                        "0.000",
                        "0.000",
                        "0.000",
                        "Active",
                    ],
                    "url": "/accounting/accountingvendorbillview"

                },
                "row1": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "700.00",
                        "700.00",
                        "All / Expenses",
                        "Service",
                        "0.000",
                        "0.000",
                        "0.000",
                        "Active",
                    ],
                    "url": "/accounting/accountingvendorbillview"

                },
                "row2": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "700.00	",
                        "700.00	",
                        "All / Expenses",
                        "Service",
                        "0.000	",
                        "0.000	",
                        "0.000	",
                        "Active",
                    ],
                    "url": "/accounting/accountingvendorbillview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}