import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"


export default{

    created: function () {
        this.select();




    },
    props: [
        "edit",

    ],
    data () {
        return {

            id: '',
            title: '',
            job_tittle: '',
            options: '',

            btnlinks: {

                createbtnlink: "#/app/attendance/InsideHrTwo",
                discardbtnlink: "/recruitment/Reqpipe",
                editbtnlink:"#/app/attendance/InsideHrTwo",
                importbtnlink: "#/app/imported"
            },

        }
    },
    ready() {

    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/jobs", {"id": self.$route.params.id}).then(function (res) {
                self.job_tittle = res.body.data;


                console.log(self.names);
            },function(err){
                alert(err);
            });
            //console.log(this.$route.query.id);
            // console.log(self.job_specific);
        },

        // insertapplications() {
        //
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         // this.submit();
        //         //this.select();
        //         //this.insert();
        //
        //         // this.submiting();
        //
        //         //  alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //         //  alert('Correct them errors!');
        //     });
        // } ,
        // validateBeforeSelect() {
        //
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         // this.submit();
        //
        //        // this.select();
        //       //  this.selectcontact();
        //         //this.insert();
        //
        //         // this.submiting();
        //
        //         //  alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //         //  alert('Correct them errors!');
        //     });
        // } ,
        validateBeforeSubmit() {

            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line

                this.submit();
                //this.select();
                //this.insert();

                // this.submiting();

                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower,
        Modal,
    },


}