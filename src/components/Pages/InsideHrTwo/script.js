import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_Quotation_Lower/Request_Quotation_Lower.vue"

export default{
    created: function () {
        $(function() {
            //use this method to add new colors to pallete
            //$.fn.colorPicker.addColors(['000', '000', 'fff', 'fff']);

            $('#color1').colorPicker();

            $('#color2').colorPicker();

            $('#color3').colorPicker({pickerDefault: "ffffff", colors: ["ffffff", "000000", "111FFF", "C0C0C0", "FFF000"], transparency: true});

            $('#color4').colorPicker();

            $('#color5').colorPicker({showHexField: false});

            //fires an event when the color is changed
            //$('#color1').change(function(){
            //alert("color changed");
            //});

            $("#button1").click(function(){
                $("#color1").val("#ffffff");
                $("#color1").change();
            });

            $("#button2").click(function(){
                $("#color2").val("#000000");
                $("#color2").change();
            });

        });



    },
    props: [
        "edit",

    ],
    data () {
        return {
            nextactivity: "Attendances/Hans Anders from 2017-03-14 12:53:47 to 2017-03-23 12:53:50/Hans Anders/Research & Development",
            btnlinks: {

                discardbtnlink: "#/app/attendance/Hr",
                importbtnlink: "#/app/imported"
            },
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
    },


}