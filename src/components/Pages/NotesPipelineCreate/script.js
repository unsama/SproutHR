import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ScheduleanActivity from "./../../partials/ScheduleanActivity/ScheduleanActivity.vue"
import Message from "./../../partials/Message/Message.vue"


export default{
    created: function () {
        $(function () {

            $('#dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                });
            CKEDITOR.replace( 'editor1' );
        });
    },
    data(){
        return {
            modalheading: "Schedule an Activity",
            pipeline: "Notes / New",
            btnlinks: {
                discardbtnlink: "/notes/",
                importbtnlink: "/notes/imported",
                firstbtnlink: "/notes/pipeline",
                secondbtnlink: "/notes/salespipelinelistview"
            },
        }
    },
    components: {
        DashboardController,
        Modal,
        ScheduleanActivity,
        Message

    }
}



