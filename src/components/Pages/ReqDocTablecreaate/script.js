
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Chat from "./../../partials/chat/chat.vue"
import Imported from "./../../Pages/Imported/Imported.vue"

export default{
    created: function () {
       

        $(document).ready(function() {
            $('.dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });
        $(document).click(function (e)
        {
            var container = $("");

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.hide();
            }
        });
        function htmlbodyHeightUpdate(){
            var height3 = $( window ).height()
            var height1 = $('.nav').height()+50
            height2 = $('.main').height()
            if(height2 > height3){
                $('html').height(Math.max(height1,height3,height2)+10);
                $('body').height(Math.max(height1,height3,height2)+10);
            }
            else
            {
                $('html').height(Math.max(height1,height3,height2));
                $('body').height(Math.max(height1,height3,height2));
            }

        }
        $(document).ready(function () {
            htmlbodyHeightUpdate()
            $( window ).resize(function() {
                htmlbodyHeightUpdate()
            });
            $( window ).scroll(function() {
                height2 = $('.main').height()
                htmlbodyHeightUpdate()
            });
        });

        $(document).ready(function() {
            $('.dateRangePicker1')
                .datepicker({
                    format: 'mm/dd/yyyy ',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                });
            $('.datetimepicker1').datetimepicker();
        });

        $('#openBtn').click(function(){
            $('#myModal').modal({show:true})
        });


    },
    data(){
        return{
            r: false,
            t:false,
            a:false,
            b:true,
            c:false,
            d:false,

            nextactivity: "#Inbox",
            star: "#Starred",
            channal: "#Usama",
            channalone: "#sdsd",
            btnlinks: {
                createbtnlink: "",
                discardbtnlink: "",
                importbtnlink: "",
                Settingsbtnlink: "#/DiscuessChannal",
                cancelbtnlink:"#app/Recruitment/ReqStages"

            },
        }
    },
    components: {

        dashconterller: DashboardController,
        Chat: Chat,
        Imported: Imported


    }
}