import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Templatetablecreatecompo from "./../../partials/Templatetablecreatecompo/Templatetablecreatecompo.vue"

export default{
    created: function () {
        var self = this;
        document.title = this.title;
        $(function () {
            $("#save").click(function () {
                var r = confirm("Are you sure update user");
                if (r)
                {
                    // x="You pressed OK!";
                    //console.log("asdasdas");
                    window.location.href = "../templatetablein/"+self.$route.params.id;
                    self.submit();
                }
                else
                {
                    // x="You pressed Cancel!";
                }
            });
            CKEDITOR.replace( 'editor1' );
            self.select();
            self.btnlinks.discardbtnlink = "/setting/templatetablein/"+self.$route.params.id;
        });
    },
    data(){
        return {
            head: "Partner Review / ",
            title: 'Partner Review - Sprout',
            btnlinks: {
                savebtnlink: "",
                discardbtnlink: "",
            },
        }
    },


    components: {
        DashboardController,
        Templatetablecreatecompo

    }
}
