import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function(){
        $(function(){
            $(".appfield").on("click", function () {
                $(".MailingList").show();
                $(".applicants").hide();
            });
            $(".mailfield").on("click", function () {
                $(".applicants").show();
                $(".MailingList").hide();
            });
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
                anch.css({"backgroundColor":col});
            });
        });
    },
    data () {
        return {
            vendormenu: "Mass Mailingss / User",
            modal: "Open: Contacts",
            btnlinks: {
                createbtnlink: "#/app/massmailing/massmailinglistcreate",
                discardbtnlink: "#/app/massmailing/massmailingview",
                importbtnlink: "#/app/massmailing/massmailinglistimport",
                editbtnlink: "#/app/massmailing/massmailingedit",
            },
            tableheader: [
                "Mailing List",
                "Creation Date",
                "Number of Contacts",


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
                        "Imported Contacts",
                        "02/18/2017 18:41:39r",
                        "David Armstrong",
                        "+923322323883",
                    ],
                    "url": "#/app/massmailing/massmailinglistview"

                },
                "row1": {
                    "data": [
                        "Imported Contacts",
                        "02/18/2017 18:41:39r",
                        "David Armstrong",
                        "+923322323883",
                    ],
                    "url": "#/app/massmailing/massmailinglistview"

                },
                "row2": {
                    "data": [
                        "Imported Contacts",
                        "02/18/2017 18:41:39r",
                        "David Armstrong",
                        "+923322323883",
                    ],
                    "url": "#/app/massmailing/massmailinglistview"
                },

            }
        }
    },

    components: {
        DashboardController,
        ProductEdit,
        Request_quotation_lower,
        Modal,
        TableMain
    }
}