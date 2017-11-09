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
                createbtnlink: "#/app/accounting/customercreate",
                discardbtnlink: "#/app/massmailing/massmailingview",
                importbtnlink: "#/app/sales/salescustomerimport",
                editbtnlink: "#/app/massmailing/massmailingedit",
            },
            tableheader: [
                "Create Date",
                "Subject / Application Name",
                "Applicant's Name",
                "Email",
                "Phone",
                "Applied Job",
                "Stage",
                "Medium",
                "Source",
                "Apprecation",
                "Responsible",

            ],
            tablefooter:[
              "",
              "",
              "",
              "",
              "",
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
                        "04/01/2017 13:02:48",
                        "Finance Manager",
                        "David Armstrong",
                        "",
                        "+923322323883",
                        "HR Analyst	",
                        "asad",
                        "Facebook",
                        "Very Good",
                        "Demo User",
                        "",
                    ],
                    "url": "#/app/massmailing/massmailingedit"

                },
                "row1": {
                    "data": [
                        "04/01/2017 13:02:48",
                        "Finance Manager",
                        "David Armstrong",
                        "",
                        "+923322323883",
                        "HR Analyst	",
                        "asad",
                        "Facebook",
                        "Very Good",
                        "Demo User",
                        "",
                    ],
                    "url": "#/app/massmailing/massmailingedit"

                },
                "row2": {
                    "data": [
                        "04/01/2017 13:02:48",
                        "Finance Manager",
                        "David Armstrong",
                        "",
                        "+923322323883",
                        "HR Analyst	",
                        "asad",
                        "Facebook",
                        "Very Good",
                        "Demo User",
                        "",
                    ],
                    "url": "#/app/massmailing/massmailingedit"
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