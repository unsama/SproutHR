import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import jobs from "./../../partials/Jobs/Jobs.vue"


export default{
    created: function () {
        var self = this;
        this.select();
        $(function() {
            $("#save").click(function () {
                if(self.job_tittle=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);
                    });
                }
                else{
                    window.location.href = "/recruitment/JobPosition";
                    self.submit();
                }
            });
            $("#hide").click(function(){
                $("#hide").hide();
                document.getElementById("b").classList.add("oe_active");
                document.getElementById("a").classList.remove("oe_active");
            });
            $("#show").click(function(){
                $("#show").hide();
                document.getElementById("a").classList.add("oe_active");
                document.getElementById("b").classList.remove("oe_active");

            });
            $("#show").click(function(){
                $("#hide").show();
            });
            $("#hide").click(function(){
                $("#show").show();
            });
            // $('#abcs').on('change',function(){
            //     var ab = $('#abcs option:selected').val();
            //     if(ab== null){
            //         $('#ss').hide();
            //     }
            //     else{
            //         $('#ss').show();
            //     }
            // });
            // $(".dept_dropdown").on('change',function(){
            //     var value = $(this).val();
            //     if(value=="Create and Edit..."){
            //         $(".bd-example-modal-lg1").modal('show');
            //     }
            // });

        });
    },
    props: [
        "edit",
    ],
    data () {
        return {
            nextactivity: "Job Positions/New",
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
            job_tittle: '',
            department_id: '',
            recruitment_responsible: '',
            expected: '',
            job_email: '',
            job_location: '',
            description: '',
            options2: '',
            options: '',
            options3: '',
            gf: '',
            btnlinks: {
                createbtnlink: "",
                discardbtnlink: "/recruitment/JobPosition",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                savebtnlink:"",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        selectid: function (id) {
            var self = this;
            self.gf=id;

        },
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/reqjob", {"status": self.gf,"job_tittle": self.job_tittle,"job_email": self.job_email,"department_id": self.department_id,"recruitment_responsible": self.recruitment_responsible,"expected": self.expected,"job_location": self.job_location,"description": self.description}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/deps", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/recruitment/reqresponse", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/recruitment/joblocation", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);

            },function(err){

            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                this.submit();

            }).catch(() => {
                // eslint-disable-next-line

            });
        }


    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Modal,
        jobs,
    },


}