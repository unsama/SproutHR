import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pin from "./../../partials/Pin/Pin.vue"
import  TableMain from "./../../partials/TableMain/TableMain.vue"
import Contract from "./../../partials/Contract/Contract.vue"
import Contracting from "./../../partials/Contracting/Contracting.vue"
export default{
    created: function () {

        $(function(){

            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
        });
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
    },
    data(){
        return {
            btnlinks: {
                createbtnlink: "/purchase/incomcreate",
                importbtnlink:"/purchase/IncomingProductImport"
            },
            tableheader: [
                "Expected Date",
                " Date",
                "Source Document",
                "Product",
                " Quantity",
                " Status",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "01/28/2017",
                        " 01/28/2017",
                        "",
                        "[1] Ice Cream",
                        " 50.00",
                        " New",

                    ],
                    "url": "/purchase/Incomingmenu"


                },

            },
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
                "",



            ],


            r: true,
            p: false,
            k: true,
            nextactivity: "Incoming Products",
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },
    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Pin,
        Tableview,
        Contract,
        Contracting,
        TableMain,
        dashconterller: DashboardController

    }

}







