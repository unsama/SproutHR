// import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
// import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
// import Modal from "./../../partials/Modal/Modal.vue"
// import Message from "./../../partials/Message/Message.vue"
//
// export default{
//     created: function(){
//         $(function(){
//             $(".colorbg").on("click", function (e) {
//                 e.preventDefault();
//                 var col = $(this).css("backgroundColor");
//                 var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
//                 anch.css({"backgroundColor":col});
//             });
//         });
//     },
//     data () {
//         return {
//             vendormenu: "hassan/4sla, Alex",
//             modal: "Open: Contacts",
//             btnlinks: {
//                 createbtnlink: "/attendance/salescustomercreate",
//                 discardbtnlink: "#/app/sales/salescustomeredit",
//                 importbtnlink: "#/app/imported",
//                 editbtnlink: "#/app/sales/salescustomeredit",
//             },
//         }
//     },
//     components: {
//         DashboardController,
//         ProductEdit,
//         Request_quotation_lower,
//         Modal,
//         Message
//     }
// }