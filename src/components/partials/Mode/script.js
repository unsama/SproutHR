
export default{
    created: function(){
        $(document).ready(function () {
            var d = new Date();
            var hour    = d.getHours();
            var minute  = d.getMinutes();
            var second  = d.getSeconds();
            var time = hour+":"+minute+":"+second;
            $("#demo").html(time);
        });
    },





}


