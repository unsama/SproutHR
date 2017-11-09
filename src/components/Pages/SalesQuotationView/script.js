import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Message from "./../../partials/Message/Message.vue"
export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#salescreate').css("display");
                if(check == "none"){
                    $('#salescreate').show();
                    $('#salesedit').hide();
                }else{
                    $('#salescreate').hide();
                    $('#salesedit').show();
                }

            });
            CKEDITOR.replace( 'editor1' );
            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
        });

    },
    data(){
        return {
            quotation: "Quotations / SO014",
            modal: "Open: Projects",
            btnlinks: {
                createbtnlink:"/sales/salesquotationcreate",
                editbtnlink:"/sales/salesquotationedit"
            },
            tableheader: [
                "Product",
                "Description",
                "Ordered Qty",
                "Unit Price",
                "Taxes",
                "Subtotal"

            ],
            tablefooter:[
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
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    "url": ""

                },
                "row1": {
                    "data": [
                        "",
                        "",
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
        Message
    }
}
