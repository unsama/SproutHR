
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
        
    },
    data () {
        return {
            head: "Currencies/ AED",
            btnlinks: {
                createbtnlink: "#/app/accounting/createcurrency",
                editbtnlink: "#/app/accounting/EditCurrency"
            },


        }
    },


    components: {

        DashboardController,
    }
}
// export default{
//     created: function() {
//         $(document).ready(function () {
//             $("#hasS").click(function () {
//                 $("#hh").show();
//                 $('#hasS').show();
//                 $('#hasH').hide();
//                 $('#save').show();
//                 $('#hasS').hide();
//                 $('#serch_hide').hide();
//
//             });
//             $("#hasHide").click(function () {
//                 $("#hh").hide();
//                 $("#hasH").show();
//                 $('#hasS').show();
//                 $('#save').hide();
//
//
//             });
//         });
//
//     }
//
// }
