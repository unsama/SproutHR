import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
export default{
    created: function () {
        $(function(){
            CKEDITOR.replace( 'editor1' );
            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
        });

    },
    data(){
        return {

            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,
            v1: false
        }
    },

data(){
    return {
        btnlinks: {
            purchaseeditbtnlink:"#/app/newuser",
            discardbtnlink:"#/app/imported"
        },

    }
},
components: {
    DashboardController,
}
}
