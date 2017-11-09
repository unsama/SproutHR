import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import ScheduleanActivity from "./../../partials/ScheduleanActivity/ScheduleanActivity.vue"


export default{
    created: function () {
        this.select();
        document.title = this.title;
        $(function () {
            $("#sortable1, #sortable2").sortable({
                connectWith: ".connectedSortable"
            }).disableSelection();

            $("#click").on("click", function () {
                $('#create').toggle();
            });
            $("#click1").on("click", function () {
                $('#create1').toggle();
            });
            $("#click2").on("click", function () {
                $('#create2').toggle();
            });
            $("#click3").on("click", function () {
                $('#create3').toggle();
            });
            $("#addnew").on("click", function () {
                $('#addshow').show();
                $('#addnew').hide();
            });
            $("#discard").on("click", function () {
                $('#addnew').show();
                $('#addshow').hide();
            });
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
            });
        });


    },
    data(){
        return {
            modalheading: "Schedule an Activity",
            title : "Your Pipeline - Sprout",
            pipeline: "Job Positions/Applications",
            btnlinks: {
                createbtnlink: "/recruitment/ReqJobAppCreate",
                importbtnlink: "/recruitment/ReqPipeImport",
                firstbtnlink: "/recruitment/Reqpipe",
                secondbtnlink: ""
            },
            tableheader: [
                " Subject / Application Name",
                " Applicant's Name",
                " Email",
                " Phone",
                " Source",
                " Applied Job",
                " Appreciation",
                " Responsible",
            ],
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "Asad",
                        "Alupak",
                        "khan",
                        "Leaves",
                        "Asad",
                        "Alupak",
                        "khan",
                        "Leaves",
                        "Asad",
                        "Alupak",
                        "khan",




                    ],
                    "url": "/recruitment/ReqJobApp"


                },

            },
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/pipe", {
                "name": self.options,
            }).then(function(res){
                var data = res.body.data;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.applicants_name,
                                val.application_tittle,
                                val.email,
                                val.phone,
                                val.source,
                                val.appreciation,
                                val.responsible_id,
                            ],
                            "url": "/recruitment/Stages/"+val.id,

                        });
                    });
                }
                //self.options =res.body.data;
                //console.log(res.body);
            },function(err){
                alert(err);
            });
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
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
        dashconterller: DashboardController,
        Modal,
        ScheduleanActivity,
        TableMain,
    }
}



