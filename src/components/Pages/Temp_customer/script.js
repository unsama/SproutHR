export default{
    created: function() {
        $(document).ready(function () {
            $("#temp_show").click(function () {
                $("#tem_hide").hide();
                $('#tem_show').show();
                $('#save').show();
                $('#temp_show').hide();
            });
             $("#temp_hide").click(function () {
                $("#tem_hide").show();
                $("#tem_show").hide();
                $('#save').hide();
                 $('#temp_show').show();
            });
        });
    }
}
