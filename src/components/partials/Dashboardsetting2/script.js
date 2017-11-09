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
                $('#save').show();

            });
            $("#discard").click(function () {
                $("#save").hide();
                $("#edit").show();
                $('#save').hide();

            });
        });
    }
}
