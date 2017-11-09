function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

var tkn = get("token");

$(document).ready(function() {
    $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        data: {token_number: tkn},
        url: '/setting/checkUserExists',
        success: function (data) {
            if(data.message == "User Exists."){
                $("#emailOld").val(data.email);
                $("#newUser").css("display", "none");
            }
            else{
                $("#oldUser").css("display", "none");
            }
        },
        error: function (xhr, err) {
            console.log(xhr.status);
        }
    });

});