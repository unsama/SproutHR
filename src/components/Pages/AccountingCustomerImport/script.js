import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
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
            activityimport: "Customers / Import a File",
            btnlinks: {
                createbtnlink: "/accounting/salescustomercreate",
                discardbtnlink: "/accounting/customerlistview",
                importbtnlink: "/accounting/salesordertoupsellimport",
                cancelbtnlink: "/accounting/customerlistview",
            },
        }
    },
    components: {
        DashboardController,
        Imported
    }
}