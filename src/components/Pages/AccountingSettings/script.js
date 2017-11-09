import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function(){
        document.title = this.title;
        $(function(){
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
            vendormenu: "Invoices Analysis",
            modal: "Open: Contacts",
            title: "Setting - Sprout",
            btnlinks: {
                createbtnlink: "/accounting/customercreate",
                discardbtnlink: "/accounting/salescustomeredit",
                importbtnlink: "/accounting/salescustomerimport",
                editbtnlink: "/accounting/customeredit",
            },
        }
    },
    components: {
        DashboardController,
    }
}