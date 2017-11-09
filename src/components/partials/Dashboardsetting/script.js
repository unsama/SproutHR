export default{
    created: function() {
        $(document).ready(function () {
            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
        $(document).ready(function () {
            $("#edit").click(function () {
                $("#save").show();
                $('#edit').hide();

            });
            $("#discard").click(function () {
                $("#save").hide();
                $("#edit").show();

            });
        });
    }
}
