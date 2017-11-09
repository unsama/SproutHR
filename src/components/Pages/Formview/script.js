
export default{
    created: function() {
        $(document).ready(function () {
            $("#hasS").click(function () {
                $("#hh").show();
                $('#hasS').show();
                $('#hasH').hide();
                $('#save').show();
                $('#hasS').hide();
                $('#serch_hide').hide();

            });
            $("#hasHide").click(function () {
                $("#hh").hide();
                $("#hasH").show();
                $('#hasS').show();
                $('#save').hide();


            });
        });
    }

}
