import Buttonsgroup from "./../Buttonsgroup/Buttonsgroup.vue"
import Pagination from "./../Pagination/Pagination.vue"

export default{
    created: function () {
        $(document).ready(function () {
            $(".samodropdownbutton2").click(function () {
                $(".samodropdownbutton3").toggle();
            });
            $("#searchbutton1").click(function () {
                $(".samodropdownbutton2").toggle();
            });

        });

    },
}

