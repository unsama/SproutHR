import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
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
            btnlinks: {
                createbtnlink:"/sales/salesnextactivitiescreate",
                importbtnlink:"/sales/imported",
                discardbtnlink:"/sales/quotation"
            },
            tableheader: [
                "Product",
                "Description",
                "Ordered Qty",
                "Unit Price",
                "Taxes",
                "Subtotal"

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
        TableMain
    }
}
