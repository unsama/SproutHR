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
            customers: "Currencies",
            title: "Currencies - Sprout",
            btnlinks: {
                createbtnlink:"/accounting/currenciescreate",
                discardbtnlink:"/accounting/accountingcurrency",
                importbtnlink: "/accounting/vendorimport",
                firstbtnlink: "/accounting/vendors",
                secondbtnlink: "/accounting/vendorlistview",
            },
            tableheader: [
                "Name",
                "Phone",
                "Email",

            ],
            tablefooter: [
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
                        "agrolait@yourcompany.example.com",
                    ],
                    "url": "/accounting/currenciesview"

                },
                "row1": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "agrolait@yourcompany.example.com",
                    ],
                    "url": "/accounting/currenciesview"

                },
                "row2": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "agrolait@yourcompany.example.com",
                    ],
                    "url": "/accounting/currenciesview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}