export default{
    created: function () {
        $(function () {
            $(".max_min_button").click(function () {
                if ($(this).html() == "-") {
                    $(this).html("+");
                } else {
                    $(this).html("-");
                }
                var thisParent = $(this).parent();
                $(thisParent).next(".news_body").slideToggle();
            });
        });
    }
}


