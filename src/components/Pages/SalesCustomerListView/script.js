import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
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
            customers: "Customers",
            btnlinks: {
                createbtnlink:"/sales/newuser",
                importbtnlink: "/sales/salescustomerimport",
                firstbtnlink:"/sales/customers",
                secondbtnlink:"/sales/salescustomerlistview"
            },
            tableheader: [
                "Name",
                "Phone",
                "Email",

            ],
            tablefooter:[
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
                    "url": "/sales/salescustomerview"

                },
                "row1": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "agrolait@yourcompany.example.com",
                    ],
                    "url": "/sales/salescustomerview"

                },
                "row2": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "agrolait@yourcompany.example.com",
                    ],
                    "url": "/sales/salescustomerview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}