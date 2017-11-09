import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_Quotation_Lower/Request_Quotation_Lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
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
            nextactivity: "Attendances/Hans Anders from 2017-03-14 12:53:47 to 2017-03-23 12:53:50/Hans Anders/Research & Development",
            modal2: "Open: Department",
            modal1: "Open: Leave Type",
            modal14: "Open: Parent Department",
            modal15: "Open: Meeting Type",
            modal16: "Open: Company",
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
            modal20: "Open: Manager",
            btnlinks: {

                discardbtnlink: "#/app/attendance/Leave",
                importbtnlink: "#/app/imported"
            },
            tableheader: [
                " Name",
                " Day OF Week",
                " Work From",
                " Work To",
                " Strarting Date",
                " End Date",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "Monday morning",
                        "Monday",
                        "08:00	",
                        "08:00	",
                        "",
                        "",
                    ],


                },

            },
            tableheader1: [
                "Reason",
                "Resource",
                " Company",
                " Working Time",
                " Start Date",
                " End Date",


            ],
            tabledata1: {
                "row1": {
                    "data": [
                        " 2 Hours On Leave",
                        "Analyst",
                        "Alupak Industriess	",
                        "40 Hours/Week	",
                        "01/28/2017 13:00:00",
                        "08/28/2017 13:00:00",
                    ],


                },

            }
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Modal,
        TableMain,
    },


}