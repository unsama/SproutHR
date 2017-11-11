
import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import EmpContract from "./../../partials/EmpContract/EmpContract.vue"
import ContractNew from "./../../partials/ContractNew/ContractNew.vue"



export default{
    created: function () {
        var self = this;
        this.select();

        $(function () {

            self.btnlinks.editbtnlink ="/recruitment/LetterEdit/"+self.$route.params.id;
            $(".delete").click(function () {
                self.submit();
            });
        })
        $(function(){
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
                anch.css({"backgroundColor":col});
            });
            $(document).ready(function(){
                $(".btn.btn-success.b").click(function(){
                    $("#panel").slideToggle("slow");
                });
            });

            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#edit1').css("display");
                if(check == "none"){
                    $('#edit1').show();
                    $('#main1').hide();
                }else{
                    $('#edit1').hide();
                    $('#main1').show();
                }

            });

            document.title = this.title;
            var oldtext;
            $('.note.btn.btn-primary').hover(function(){
                oldtext = $(this).text();
                $(this).text("Unfollow");
            }, function(){
                $(this).text(oldtext)
            });
            $(document).ready(function () {
                var d = new Date();
                var hour    = d.getHours();
                var minute  = d.getMinutes();
                var second  = d.getSeconds();
                var time = hour+":"+minute+":"+second;
                $("#demo").html(time);
            });
        });

    },
    data(){
        return {
            r: true,
            t:false,
            k:false,
            y:false,
            p:true,
            f:false,
            l:false,
            document_url: '',
            type: '',
            application_tittle: '',
            degree: '',
            u:false,
            counter: 0,
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,
            nextactivity: "Resumes and Letters/Jose_CV.txt",
            btnlinks: {
                createbtnlink:"#/app/Employees/Contracttwo",
                importbtnlink:"#/app/imported",
                savebtnlink:"#/app/Employees/Contractone",
                editbtnlink:"",
                deletedropbtnlink:"",
            },
            tableheader: [
                "Reference",
                "Destination Location Zone",
                "Partner",
                "Schduled Date",
                "Source Document",
                "Back Order Of",
                "Status",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/#/app/sales/request_quotation_inner"
                },

            }

        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/deleteletter", {"id": self.$route.params.id}).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/letterEdits", {
                "application_id": self.$route.params.id,

            }).then(function(res){
                var parentdata = res.body.data[0];
                self.document_url = parentdata.document_url;
                self.type = parentdata.type;
                console.log(self.parentdata);

            },function(err){
                alert(err);
            });
            self.$http.post("/recruitment/letterEditsjobs", {
                "application_id": self.$route.params.id,

            }).then(function(res){
                var parentdata = res.body.data[0];
                self.application_tittle = parentdata.application_tittle;

                console.log(self.parentdata);

            },function(err){
                alert(err);
            });

            //console.log(this.$route.query.id);
            // console.log(self.job_specific);
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                this.submit();
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
        }


    },
    components: {
        Emptyform,
        Tabs,
        ContractNew,
        Modal,
        ModelDescription,
        Componame,
        DashboardController,
        Tableview,
        Editing,
        Request_quotation_lower,
        Message,
        EmpContract,
    }

}
