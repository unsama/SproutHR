import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Modal from "./../../partials/Modal/Modal.vue"
export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#show1').css("display");
                if(check == "none"){
                    $('#show1').show();
                    $('#edit1').hide();
                }else{
                    $('#show1').hide();
                    $('#edit1').show();
                }

            });
        });

    },
    data(){
        return {
            quotation: "Sales Teams / Direct Sales",
            modal: "Add: Team Members",
            modal1: "Open: Sales Team",
            modal2: "Open: Company",
            btnlinks: {
                createbtnlink:"/sales/salesordercreate",
                discardbtnlink:"/sales/salesteams"
            },
            tableheader: [
                "Name",
                "Login",
                "Language",
                "Latest Connection",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chao Wang",
                        "chao.wang@chinaexport.example.com",
                        "English",
                        "0.000",
                    ],
                    "url": ""

                },
                "row1": {
                    "data": [
                        "",
                        "",
                        "",
                        "",
                    ],
                    "url": ""

                },
                "row2": {
                    "data": [
                        "",
                        "",
                        "",
                        "",

                    ],
                    "url": ""

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain,
        Modal
    }
}
