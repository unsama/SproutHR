import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
export default{
    created: function () {
        $(document).ready(function() {
            $('#dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });

        $(document).ready(function() {
            $('#dateRangePicker1')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });

        $(function(){
            CKEDITOR.replace( 'editor1' );
            $('#profile-image').on('click', function() {
                $('#profile-image-upload').click();
            });

        });

    },
    data(){
        return{
            nextactivity: "Journal Entries/ New",
            btnlinks: {
                savebtnlink:"#/JournalTab",
                discardbtnlink: "#/journalentry"
            },
        }
    },
    components: {
        DashboardController

    }
}


