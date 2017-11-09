

export default{
    created: function () {
        $(function () {
            $("#searchbutton1").off("click");
            $("#searchbutton1").on("click",function () {
                $(".samodropdownbutton3").toggle();
            });
        });

    },
}

