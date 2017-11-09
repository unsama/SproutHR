export default{
    created: function () {
        $(function () {
            $(".samobtn1,.samobtn2").hide();
            $(".messagebtn1").click(function () {
                $(".samobtn1").show();
                $(".samobtn2").hide();
            });
            $(".messagebtn2").click(function () {
                $(".samobtn1").hide();
                $(".samobtn2").show();
            });
        });
    }
}


