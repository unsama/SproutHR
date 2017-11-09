import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ReqEdit from "./../../partials/ReqEdit/ReqEdit.vue"


export default{
    created: function () {
        var self = this;
        this.select22();
        $(function() {
            $("#save").click(function () {
                var r = confirm("Are you sure you want to  Edit   Attendances");
                if (r)
                {
                    window.location.href = "/attendance/select_attendance_info/"+self.$route.params.id+"/"+ self.$route.params.date;
                    self.submit();
                }
                else
                {
                }
            });
            self.btnlinks.discardbtnlink = "/attendance/select_attendance_info/"+self.$route.params.id+"/"+ self.$route.params.date;
            $('#datepicker').datepicker({
                format: "yyyy/mm/dd",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);
            $('#datepicker1').datepicker({
                format: "yyyy/mm/dd",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate1);
            function showTestDate() {
                var value = $('#datepicker').datepicker('getFormattedDate');
                self.CheckIn = value;
                console.log(self.CheckIn)
            };
            function showTestDate1() {
                var value1 = $('#datepicker1').datepicker('getFormattedDate');
                self.CheckOut = value1;
                console.log(self.CheckOut)
            };
            $('#abcs').on('change',function(){
                var ab = $('#abcs option:selected').val();
                if(ab== null){
                    $('#ss').hide();
                }
                else{
                    $('#ss').show();
                }
            });
            $(".dept_dropdown").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit"){
                    $(".bd-example-modal-lg1").modal('show');
                }
            });


        });
    },
    props: [
        "edit",
    ],
    data () {
        return {
            nextactivity: "Departments/New",
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
            name: '',
            nname: '',
            emp_id: '',
            CheckIn: '',
            CheckOut: '',

            options: '',

            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                savebtnlink:"",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        select22: function () {
            var self = this;
            self.$http.post("/recruitment/selectatt", {"id": self.$route.params.id,"date": self.$route.params.date}).then(function (res) {
                var parentdata = res.body.data[0];
                self.emp_id = parentdata.emp_id;
                self.CheckIn = parentdata.CheckIn;
                self.CheckOut = parentdata.CheckOut;
                //console.log(this.$route.query.id);

                //console.log(self.job_tittle);


            }, function (err) {
            });
            self.$http.post("/recruitment/select_employee", {
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
        },
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/attandanceupdate", {"date": self.$route.params.date,"id": self.$route.params.id,"CheckIn": self.CheckIn,"CheckOut": self.CheckOut,"emp_id": self.emp_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        validateBeforeSubmit() {
            var self = this;
            this.$validator.validateAll().then(() => {
            }).catch(() => {
            });
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Modal,
        ReqEdit,
    },


}