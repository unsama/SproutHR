
export default{
    created: function () {
        document.title = this.title;


    },
    data(){
        return {
            btnlinks: {
                createbtnlink:"#/app/Recruitment/Jobcreate",
                importbtnlink:"#/app/Recruitment/JobImport",
                editbtnlink:"#/app/attendance/Pin"
            },

            r: true,
            p: false,
            k: true,
            nextactivity: "Job Positions",
            title : "Configure Recuritment - Sprout",
            counter: 0,
            interview_form: '',
            name: '',
            id: '1',
            notinterview_forms: '',
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,

        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/updatesettings", {"id": self.id,"employee_pin": self.name}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {

                this.submit();

            }).catch(() => {
                // eslint-disable-next-line

            });
        }


    },
    components: {


    }

}







