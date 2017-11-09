import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"

export default{
    created: function () {
        $(function () {
            $("#topm").click(function () {
               $(".hidefd").show();
               $(".showfd").hide();
               $("#activity_discardbtn").show();
               $("#popup").show();
            });
            $("#activity_discardbtn").click(function () {
                $(".hidefd").hide();
                $(".showfd").show();
                $("#activity_discardbtn").hide();
            });
            $("#create").click(function () {
                $(".showfd").hide();
                $(".hidefd").show();
                $("#activity_discardbtn").show();
                $("#popup").hide();
            });
            $( "#datepicker" ).datepicker();
            $("#ckbCheckAll").click(function () {
                $(".checkBoxClass").prop('checked', $(this).prop('checked'));
            });

        });


    },
    data () {
        return {
            dashboard: "Activities",
            modal: "Open: Projects",
            modal1: "Open: Projects Manager",
            modal2: "Open: Customer",
            modal3: "Open: Projects Manager",
            modal4: "Open: Company",
            modal5: "Confirmation",
            btnlinks: {
                createbtnlink: "/timesheet/detailedactivity",
                discardbtnlink: "/timesheet/Salesnextactivityview",
                importbtnlink: "/timesheet/detailedactivityimport"
            },
        }
    },

    components: {
        DashboardController,
        Modal



    }

}