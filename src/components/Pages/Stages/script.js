import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Stager from "./../../partials/Stager/Stager.vue"
export default{
    created: function () {
        var self =this;
        this.select();
        this.select1();
        self.btnlinks.duplicatebtnlink ="/recruitment/stageDuplicate/"+self.$route.params.id

        $(function () {
            self.btnlinks.editbtnlink ="/recruitment/StageEdit/"+self.$route.params.id;

        })

    },
    props: [
        "edit",
    ],
    data () {
        return {
            counter: 1,
            nextactivity: "asas",
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
            emailname: '',
            job_specific: '',
            email_template_id: '',
            name: '',
            folded: '',
            description: '',
            job_tittle: '',
            id: '',
            num: '',
            numid: '',
            btnlinks: {
                createbtnlink: "/recruitment/Stagecreate",
                discardbtnlink: "#/app/Employees/EmpDash",
                editbtnlink:"/recruitment/StageEdit",
                importbtnlink: "#/app/imported",
                deletedropbtnlink:"",
                duplicatebtnlink:"",

            },
        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/delete", {"id": self.$route.params.id}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/tablestagesselect", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.id = parentdata.id;
                self.job_specific = parentdata.job_specific;
                self.email_template_id = parentdata.email_template_id;
                self.folded = parentdata.folded.data;
                self.description = parentdata.description
                self.$http.post("/recruitment/s", {"job_specific":self.job_specific}).then(function (res) {
                        var data = res.body.data[0];
                        self.job_tittle = data.job_tittle;
                        //console.log(self.job_tittle);

                        // console.log(res.body);
                        self.$http.post("/recruitment/selectemail", {"email_template_id":self.email_template_id}).then(function (res) {
                                var data = res.body.data[0];
                                self.emailname = data.name;
                                //console.log(self.job_tittle);

                                // console.log(res.body);

                            },

                            function (err) {

                            });

                    },
                    function (err) {
                    });
            }, function (err) {
            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/recruitment/num", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                //console.log(this.$route.query.id);
            }, function (err) {

            });
        },
    },
    // methods: {
    //     select: function () {
    //         var self = this;
    //
    //         self.$http.post("/tablestages", {
    //             "name": self.name,
    //         }).then(function(res){
    //             self.name=res.body.data.name;
    //             console.log(res.body);
    //
    //
    //             //self.options =res.body.data;
    //             //console.log(res.body);
    //         },function(err){
    //
    //         });
    //     },
    //
    //     validateBeforeSubmit() {
    //         var self = this;
    //         this.$validator.validateAll().then(() => {
    //             // eslint-disable-next-line
    //
    //             //this.submit();
    //             //this.tags();
    //             //this.insert();
    //             //this.select();
    //             //this.insert();
    //
    //             // this.submiting();
    //
    //             alert('From Submitted!');
    //         }).catch(() => {
    //             // eslint-disable-next-line
    //             //  alert('Correct them errors!');
    //         });
    //     }
    // },
    components: {
        DashboardController,
        Request_quotation_lower,
        Modal,
        Message,
        Stager,
    },


}