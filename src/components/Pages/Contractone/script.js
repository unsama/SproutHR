
import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
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
        self.select();
        self.select1();
        //self.AssignActiveClass();

        var links = $('a.link').click(function() {
            links.removeClass('active');
            $(this).addClass('active');
        });
        $(function() {
            $("#num01").click(function () {
                self.nextsubmit();
            });
            $("#num10").click(function () {
                self.backsubmit();
            });
            $("#delete").click(function () {
                self.deleteContract();
                window.location.href = "/employees/CreateDep/";
            });


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
            self.btnlinks.editbtnlink ="/Employees/EditContract/"+self.$route.params.id;
            self.btnlinks.duplicatebtnlink ="/Employees/DuplicateContract/"+self.$route.params.id;

            $(document).ready(function() {
                $("#new").click(function(){
                    self.editStatus();
                    document.getElementById("new").classList.add("oe_active");
                    document.getElementById("running").classList.remove("oe_active");
                    document.getElementById("toRenew").classList.remove("oe_active");
                    document.getElementById("expired").classList.remove("oe_active");

                });

                $("#running").click(function(){
                    self.editStatus();
                    document.getElementById("running").classList.add("oe_active");
                    document.getElementById("new").classList.remove("oe_active");
                    document.getElementById("toRenew").classList.remove("oe_active");
                    document.getElementById("expired").classList.remove("oe_active");
                });
                $("#toRenew").click(function(){
                    self.editStatus();
                    document.getElementById("toRenew").classList.add("oe_active");
                    document.getElementById("running").classList.remove("oe_active");
                    document.getElementById("new").classList.remove("oe_active");
                    document.getElementById("expired").classList.remove("oe_active");

                });
                $("#expired").click(function(){
                    self.editStatus();
                    document.getElementById("expired").classList.add("oe_active");
                    document.getElementById("new").classList.remove("oe_active");
                    document.getElementById("running").classList.remove("oe_active");
                    document.getElementById("toRenew").classList.remove("oe_active");

                });

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
            u:false,
            counter: 1,
            num:'',
            m: 'Log an internal note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,
            nextactivity: "Contracts/va",
            reference: '',
            status_name: '',
            employee_id: '',
            employeeName: '',
            departname: '',
            name: '',
            deptName:'',
            contractname:'',
            workschedule:'',
            department_id: '',
            contract_type: '',
            trial_period_duration_to: '',
            wage: '',
            advantages: '',
            trial_period_duration_from: '',
            working_schedule_id: '',
            duration_from: '',
            duration_to: '',
            job_tittle: '',
            jobTitleName:'',
            notes:'',
            visa_no:'',
            work_permit_no:'',
            visa_expire_date:'',
            btnlinks: {
                createbtnlink:"/employees/CreateContract",
                editbtnlink:"",
                importbtnlink:"#/app/imported",
                savebtnlink:"#/app/Employees/Contractone",
                duplicatebtnlink:"",
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
        getStatusValue: function (status) {
            var self = this;
            self.status_name= status;

        },
        editStatus: function(){
          var self = this;
            self.$http.post("/Employees/editContractStatus", {
                "id": self.$route.params.id,
                "contract_status": self.status_name,
            }).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        nextsubmit: function () {
            var self = this;
            self.$http.post("/Employees/selectcontractinfoForFormNext", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.$route.params.id = parentdata.id;
                self.reference = parentdata.reference;
                self.employee_id = parentdata.employee_id;
                self.$http.post("/Employees/selectemployee", {"id":self.employee_id}).then(function (res) {
                    var datas = res.body.data[0];
                    //alert("(datas.employeename).length  "+(datas.employeename).length);
                    self.employeeName = datas.employeename;


                }, function (err) {

                });
                self.job_tittle = parentdata.job_tittle;
                self.$http.post("/Employees/selectjobtitles", {"id":self.job_tittle}).then(function (res) {
                    var datas = res.body.data[0];
                    if(!datas.job_tittle){
                        alert("!datas.job_tittle");
                        self.jobTitleName ='';
                    }
                    else {
                        self.jobTitleName = datas.job_tittle;
                    }
                }, function (err) {

                });
                self.department_id = parentdata.department_id;
                self.$http.post("/Employees/selectdep", {"id":self.department_id}).then(function (res) {
                    var datas = res.body.data[0];
                    if(!datas.name){
                        self.deptName='';
                        alert("!datas.deptName");
                    }
                    else {
                        self.deptName = datas.name;
                    }
                }, function (err) {

                });
                self.contract_type = parentdata.contract_type;
                self.$http.post("/Employees/selectcontractype", {"id":self.contract_type}).then(function (res) {
                    var dept = res.body.data[0];
                    if(!dept.name){
                        alert("!datas.selectcontractype");
                        self.contractname ='';
                    }
                    else {
                        self.contractname = dept.name;
                    }
                }, function (err) {

                });

                self.wage = parentdata.wage;
                self.advantages = parentdata.advantages;
                self.trial_period_duration_from = parentdata.trial_period_duration_from;
                self.trial_period_duration_to = parentdata.trial_period_duration_to;
                self.duration_to = parentdata.duration_to;
                self.duration_from = parentdata.duration_from;
                self.working_schedule_id = parentdata.working_schedule_id;
                self.$http.post("/Employees/selectworkschedule", {"id":self.working_schedule_id}).then(function (res) {
                    var workSchedule = res.body.data[0];
                    self.workschedule = workSchedule.name;
                    console("workSchedule.workschedule : "+workSchedule.workschedule );
                }, function (err) {

                });
                self.notes = parentdata.notes;
                self.visa_no = parentdata.visa_no;
                self.work_permit_no = parentdata.work_permit_no;
                self.visa_expire_date = parentdata.visa_expire_date;
                self.status_name = parentdata.contract_status;
                $(function () {
                    if( self.status_name == "new"){

                        $("#new").addClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                    }
                    else if( self.status_name == "running")
                    {
                        $("#running").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                    }
                    else if( self.status_name == "toRenew")
                    {
                        $("#toRenew").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                    }
                    else if( self.status_name == "expired")
                    {
                        $("#expired").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                    }
                })
            }, function (err) {

            });
        },
        backsubmit: function ()     {
            var self = this;
            self.$http.post("/Employees/selectcontractinfoForFormBack", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.$route.params.id = parentdata.id;
                self.reference = parentdata.reference;
                self.employee_id = parentdata.employee_id;
                self.$http.post("/Employees/selectemployee", {"id":self.employee_id}).then(function (res) {
                    var datas = res.body.data[0];
                    self.employeeName = datas.employeename;
                    // if(datas.employeename === NULL ){
                    //     alert("!datas.employeename is Null");
                    //     self.employeeName ='';
                    // }
                    // else {
                    //     alert("!datas.employeename is not Null");
                    //
                    // }
                }, function (err) {

                });
                self.job_tittle = parentdata.job_tittle;
                self.$http.post("/Employees/selectjobtitles", {"id":self.job_tittle}).then(function (res) {
                    var datas = res.body.data[0];
                    if(!datas.job_tittle){
                        self.jobTitleName ='';
                    }
                    else {
                    self.jobTitleName = datas.job_tittle;
                    }
                }, function (err) {

                });
                self.department_id = parentdata.department_id;
                self.$http.post("/Employees/selectdep", {"id":self.department_id}).then(function (res) {
                    var datas = res.body.data[0];
                    if(!datas.name){
                        self.deptName='';
                    }
                    else {
                        self.deptName = datas.name;
                    }
                }, function (err) {

                });
                self.contract_type = parentdata.contract_type;
                self.$http.post("/Employees/selectcontractype", {"id":self.contract_type}).then(function (res) {
                    var dept = res.body.data[0];
                    if(!dept.name){
                        self.contractname ='';
                    }
                    else {
                        self.contractname = dept.name;
                    }
                }, function (err) {

                });

                self.wage = parentdata.wage;
                self.advantages = parentdata.advantages;
                self.trial_period_duration_from = parentdata.trial_period_duration_from;
                self.trial_period_duration_to = parentdata.trial_period_duration_to;
                self.duration_to = parentdata.duration_to;
                self.duration_from = parentdata.duration_from;
                self.working_schedule_id = parentdata.working_schedule_id;
                self.$http.post("/Employees/selectworkschedule", {"id":self.working_schedule_id}).then(function (res) {
                    var workSchedule = res.body.data[0];
                    self.workschedule = workSchedule.name;
                    alert("workSchedule.workschedule : "+workSchedule.workschedule );
                }, function (err) {

                });
                self.notes = parentdata.notes;
                self.visa_no = parentdata.visa_no;
                self.work_permit_no = parentdata.work_permit_no;
                self.visa_expire_date = parentdata.visa_expire_date;
                self.status_name = parentdata.contract_status;
                $(function () {
                    if( self.status_name == "new"){

                        $("#new").addClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                    }
                    else if( self.status_name == "running")
                    {
                        $("#running").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                    }
                    else if( self.status_name == "toRenew")
                    {
                        $("#toRenew").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                    }
                    else if( self.status_name == "expired")
                    {
                        $("#expired").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                    }
                })

                console.log(parentdata);
            }, function (err) {

            });
        },
        deleteContract: function () {
            var self = this;
            self.$http.post("/Employees/deleteSelectedContract", {"id": self.$route.params.id }).then(function(res){
                alert("Are you sure you want to delete the contract???");
            },function(err){

            });
        },
        select: function () {
            var self = this;
            self.$http.post("/Employees/selectcontractinfo", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.reference = parentdata.reference;
                self.employeename = parentdata.employeename;
                self.job_tittle = parentdata.job_tittle;
                self.d_name = parentdata.dept_name;
                self.contractname = parentdata.contract_name;
                self.wage = parentdata.wage;
                self.advantages = parentdata.advantages;
                self.trial_period_duration_from = parentdata.trial_period_duration_from;
                self.trial_period_duration_to = parentdata.trial_period_duration_to;
                self.duration_to = parentdata.duration_to;
                self.duration_from = parentdata.duration_from;
                self.workschedule = parentdata.sche_name;
                self.notes = parentdata.notes;
                self.visa_no = parentdata.visa_no;
                self.work_permit_no = parentdata.work_permit_no;
                self.visa_expire_date = parentdata.visa_expire_date;
                self.status_name = parentdata.contract_status;
                $(function () {
                    if( self.status_name == "new"){

                        $("#new").addClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');

                    }
                    else if( self.status_name == "running")
                    {
                        $("#running").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                    }
                    else if( self.status_name == "toRenew")
                    {
                        $("#toRenew").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');

                    }
                    else if( self.status_name == "expired")
                    {
                        $("#expired").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#reRenew").removeClass('oe_active');
                    }
                })


                console.log(parentdata);
            }, function (err) {

            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/Employees/countContract", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
                console.log(res.body)
                //console.log(this.$route.query.id);
            }, function (err) {

            });
        },
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
