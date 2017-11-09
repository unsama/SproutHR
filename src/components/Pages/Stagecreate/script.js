import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import StagesEdits from "./../../partials/StagesEdits/StagesEdits.vue"


export default{
    created: function () {
        var self = this;
        this.select();

        //this.selectjob();
        $(function() {

            $("#save").click(function () {

                if(self.name=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);
                    });
                }
                else{
                    window.location.href = "/recruitment/ReqStages";
                    self.submit();
                }

            });


        });




    },
    props: [
        "edit",

    ],
    data () {
        return {
            nextactivity: "Stages/New",
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
            stagename: '',
            name: '',
            jobspecific: '',
            options: '',
            options2: '',
            folded: '',
            Usetemplate: '',
            job_specific: '',
            email_template_id: '',
            btnlinks: {
                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/recruitment/ReqStages",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                savebtnlink:"",
                importbtnlink: "#/app/imported"
            },
        }
    },
    methods: {
        submit: function () {
            var self = this;

            self.$http.post("/recruitment/stages", {"name": self.name,"job_specific": self.job_specific,"email_template_id": self.email_template_id,"folded": self.folded,"description": self.description}).then(function(res){
                console.log(res.body);

            },function(err){

            });
        },
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/recruitment/emailss", {
                "name": self.Usetemplate,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/jobspecific", {
                "job_tittle": self.jobspecific,

            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){
            });
        },
        selectjob: function () {
            var self = this;
            self.$http.post("/recruitment/jobspecific", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.options2 =res.body.data;
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
        StagesEdits,
    },


}