import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        document.title = this.title;
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#customerform').css("display");
                if(check == "none"){
                    $('#customerform').show();
                    $('#customeredit').hide();
                }else{
                    $('#customerform').hide();
                    $('#customeredit').show();
                }

            });

            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },
    data () {
        return {
            activityimport: "Payment Transactions / Import a File",
            title: "Import a File",
            btnlinks: {
                createbtnlink: "/accounting/salescustomercreate",
                discardbtnlink: "/accounting/customerlistview",
                importbtnlink: "/accounting/paymenttransactionimport",
                cancelbtnlink: "/accounting/paymenttransactions",
            },
        }
    },
    components: {
        DashboardController,
        Imported
    }
}