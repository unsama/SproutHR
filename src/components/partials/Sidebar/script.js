import Modal from "./../../partials/Modal/Modal.vue"
import SidebarModal from "./../../partials/SidebarModal/SidebarModal.vue"


export default{
    created: function () {
        $(function () {
            $(".tog").off("click");
            $(".tog").on("click",function () {
                $(this).parent().find(".sidebarui").toggle();
            });
            $("a.samoatag").off("click");
            $("a.samoatag").on("click" , function (){
                var tagParent = $(this).parent().parent();
                if(tagParent.find("a.samoatag").hasClass("active")){
                    tagParent.find("a.samoatag").removeClass("active");
                }
                $(this).addClass("active");
            });

        });

    },
    props: [
        "headings"
    ],
    data(){
        return {
            modal:"Companies ",
            v: true,
            v1: false
        }
    },
    methods: {
        titleSet: function(val){
            if(val.indexOf("_") != -1){
                return val.split("_").join(" ");
            }
            return val;
        }
    },
    components: {
        Modal,
        SidebarModal
    },
}