
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
export default{
    created: function () {
        var max = 6;
        var x = 0;
        /*console.log($("#check1").val());
         $(".ship").on("click", function(){
         console.log("check");
         });*/
        $(function () {
            $("#check1").on("change", function () {
                var selVal = $(this).val();
                // console.log($(this).val());
                if (selVal == "Shipment") {
                    $("#append").append('<div class="row example ">' +
                        '<div class="col-6 col-xs-6"><label class="lab ">  Container Number</label></div>' +
                        '<div class="col-6 col-xs-6"><input name="inputs[]" data-v-d99439a0 class=" form-control input-lg append_in "/></div></div>' +
                        '<div class="row example ">' +
                        '<div class="col-6 col-xs-6"><label class="lab ">  Leading Bill</label></div>' +
                        '<div class="col-6 col-xs-6"><input name="inputs[]" data-v-d99439a0 class="form-control input-lg append_in"/></div></div>' +
                        '<div class="row example ">' +
                        '<div class="col-6 col-xs-6"><label class="lab "> GNS Number </label></div>' +
                        '<div class="col-6 col-xs-6"><input name="inputs[]" data-v-d99439a0 class="form-control input-lg append_in "/></div></div>' +
                        '<div class="row example ">' +
                        '<div class="col-6 col-xs-6"><label class="lab "> Good Recieving</label></div>' +
                        '<div class="col-6 col-xs-6"><input name="inputs[]" data-v-d99439a0 class="form-control input-lg append_in "/></div></div>'
                    );
                    $("#append2").append('<div class="row example ">' +
                        '<div class="col-6 col-xs-6"><label class="lab ">  Purchases Order</label></div>' +
                        '<div class="col-6 col-xs-6"><input name="inputs[]" data-v-d99439a0 class="form-control input-lg append_in "/></div></div>' +
                        '<div class="row example ">' +
                        '<div class="col-6 col-xs-6"><label class="lab ">  Piece Number</label></div>' +
                        '<div class="col-6 col-xs-6"><input name="inputs[]" data-v-d99439a0 class="form-control input-lg append_in"/></div></div>' +
                        '<div class="row example ">' +
                        '<div class="col-6 col-xs-6"><label class="lab ">Pallets Number </label></div>' +
                        '<div class="col-6 col-xs-6"><input name="inputs[]" data-v-d99439a0 class="form-control input-lg append_in"/></div></div>' +
                        '<div class="row example ">'
                    );


                }


                else
                    $('.example').remove();


            });

        });

    },
    data()
{
    return {
        title: 'Setting'
    }
}
,
components: {
    DashboardController,
}
}

