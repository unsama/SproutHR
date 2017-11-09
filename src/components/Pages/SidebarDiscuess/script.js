import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_Quotation_Lower/Request_Quotation_Lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"


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
        function htmlbodyHeightUpdate(){
            var height3 = $( window ).height()
            var height1 = $('.nav').height()+50
            height2 = $('.main').height()
            if(height2 > height3){
                $('html').height(Math.max(height1,height3,height2)+10);
                $('body').height(Math.max(height1,height3,height2)+10);
            }
            else
            {
                $('html').height(Math.max(height1,height3,height2));
                $('body').height(Math.max(height1,height3,height2));
            }

        }
        $(document).ready(function () {
            htmlbodyHeightUpdate()
            $( window ).resize(function() {
                htmlbodyHeightUpdate()
            });
            $( window ).scroll(function() {
                height2 = $('.main').height()
                htmlbodyHeightUpdate()
            });
        });
        $(function(){
            $('.samobuttopcontroller1').off('click');
            $('.samobuttopcontroller1').on('click', function () {
                let check = $('#createform').css("display");
                if(check == "none"){
                    $('#createform').show();
                    $('#createedit').hide();
                }else{
                    $('#createform').hide();
                    $('#createedit').show();
                }

            });
        });
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#createform').css("display");
                if(check == "none"){
                    $('#createform').show();
                    $('#createedit').hide();
                }else{
                    $('#createform').hide();
                    $('#createedit').show();
                }

            });
        });


    },
    props: [
        "edit",

    ],
    data () {
        return {
            nextactivity: "Job Positions/Attachments/New",
            modal2: "Open: Department",
            modal3: "Open: Job Title",
            modal4: "Open: Currency",
            modal5: "Open: Recruitment Responsible",
            modal6: "Open: Job Location",
            modal7: "Create: Contacts",
            modal8: "Open: Title",
            modal9: "Open: Account Receivable",
            modal10: "Open: Account Payable",
            modal11: "Open: Working Address",
            modal12: "Warning",
            modal50: "Open:Manager",
            modal60: "Open:Manager",
            modal61: "Open:Manager",
            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "#/app/Recruitment/ReqAppDocTable",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                importbtnlink: "#/app/imported"
            },
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Modal,
    },


}