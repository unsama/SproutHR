
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
                self.$route.params.id++;
                self.nextsubmit();
                //self.AssignActiveClass();
                //self.select3();
            });
            $("#num10").click(function () {
                self.$route.params.id--;
                self.backsubmit();
                //self.AssignActiveClass();

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
                    document.getElementById("new").classList.add("oe_active");
                    document.getElementById("running").classList.remove("oe_active");
                    document.getElementById("toRenew").classList.remove("oe_active");
                    document.getElementById("expired").classList.remove("oe_active");

                });

                $("#running").click(function(){
                    document.getElementById("running").classList.add("oe_active");
                    document.getElementById("new").classList.remove("oe_active");
                    document.getElementById("toRenew").classList.remove("oe_active");
                    document.getElementById("expired").classList.remove("oe_active");
                });
                $("#toRenew").click(function(){
                    document.getElementById("toRenew").classList.add("oe_active");
                    document.getElementById("running").classList.remove("oe_active");
                    document.getElementById("new").classList.remove("oe_active");
                    document.getElementById("expired").classList.remove("oe_active");

                });
                $("#expired").click(function(){
                    document.getElementById("expired").classList.add("oe_active");
                    document.getElementById("new").classList.remove("oe_active");
                    document.getElementById("running").classList.remove("oe_active");
                    document.getElementById("toRenew").classList.remove("oe_active");

                });

            });

            //self.btnlinks.editbtnlink = "/employees/contractsave/"+self.$route.params.id;
            //self.btnlinks.editbtnlink = alert("Inside edit button!!");
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
            employeename: '',
            departname: '',
            name: '',
            d_name:'',
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
        // getStatusValue: function (status) {
        //     var self = this;
        //     self.status_name= status;
        //
        // },

        // AssignActiveClass: function (status) {
        //     var self = this;
        //     alert(" self.status_name : "+self.status_name);
        //     if(self.status_name == "new"){
        //         document.getElementById("new").classList.add("oe_active");
        //     }
        //     else if (self.status_name =="running"){
        //         document.getElementById('running').classList.add('oe_active')
        //     }
        //     else if(self.status_name =='toRenew'){
        //         document.getElementbyId('toRenew').classList.add('oe_active');
        //     }
        //     else if(self.status_name =='expired'){
        //         document.getElementbyId('expired').classList.add('oe_active');
        //     }
        //
        // },
        nextsubmit: function () {
            var self = this;
            self.$http.post("/Employees/selectcontractinfoForFormNext", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.$route.params.id = parentdata.id;
                self.reference = parentdata.reference;
                self.employee_id = parentdata.employee_id;
                self.job_tittle = parentdata.job_tittle;
                self.department_id = parentdata.department_id;
                self.contract_type = parentdata.contract_type;
                self.wage = parentdata.wage;
                self.advantages = parentdata.advantages;
                self.trial_period_duration_from = parentdata.trial_period_duration_from;
                self.trial_period_duration_to = parentdata.trial_period_duration_to;
                self.duration_to = parentdata.duration_to;
                self.duration_from = parentdata.duration_from;
                self.working_schedule_id = parentdata.working_schedule_id;
                self.notes = parentdata.notes;
                self.visa_no = parentdata.visa_no;
                self.work_permit_no = parentdata.work_permit_no;
                self.visa_expire_date = parentdata.visa_expire_date;
                self.status_name = parentdata.contract_status;
                $(function () {
                    if( self.status_name == "new"){
                        // $('#new').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");

                        $("#new").addClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById("new").classList.add("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "running")
                    {
                        // $('#running').classList.add("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");
                        $("#running").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById('running').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "toRenew")
                    {
                        $("#toRenew").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');

                        // document.getElementbyId('toRenew').classList.add('oe_active');
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "expired")
                    {
                        // $('#expired').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");

                        $("#expired").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        // document.getElementbyId('expired').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }
                    else if( self.status_name == null)
                    {
                        $("#expired").removeClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');

                        // document.getElementbyId('expired').classList.remove('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }

                })


                console.log(parentdata);
                self.$http.post("/Employees/selectemployee", {"id":self.employee_id}).then(function (res) {
                    var data = res.body.data[0];
                    self.employeename = data.employeename;
                    self.$http.post("/Employees/selectdep", {"id":self.department_id}).then(function (res) {
                        var datas = res.body.data[0];
                        self.d_name = datas.name;
                        self.$http.post("/Employees/selectcontractype", {"id":self.contract_type}).then(function (res) {
                            var dept = res.body.data[0];
                            self.contractname = dept.name;
                            console.log(dept.name);
                            self.$http.post("/Employees/selectworkschedule", {"id":self.working_schedule_id}).then(function (res) {
                                var workSchedule = res.body.data[0];
                                self.workschedule = workSchedule.name;
                                console.log(workSchedule.workschedule );

                            }, function (err) {

                            });
                        }, function (err) {

                        });
                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });




        },
        backsubmit: function () {
            var self = this;
            self.$http.post("/Employees/selectcontractinfoForFormBack", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.$route.params.id = parentdata.id;
                self.reference = parentdata.reference;
                self.employee_id = parentdata.employee_id;
                self.job_tittle = parentdata.job_tittle;
                self.department_id = parentdata.department_id;
                self.contract_type = parentdata.contract_type;
                self.wage = parentdata.wage;
                self.advantages = parentdata.advantages;
                self.trial_period_duration_from = parentdata.trial_period_duration_from;
                self.trial_period_duration_to = parentdata.trial_period_duration_to;
                self.duration_to = parentdata.duration_to;
                self.duration_from = parentdata.duration_from;
                self.working_schedule_id = parentdata.working_schedule_id;
                self.notes = parentdata.notes;
                self.visa_no = parentdata.visa_no;
                self.work_permit_no = parentdata.work_permit_no;
                self.visa_expire_date = parentdata.visa_expire_date;
                self.status_name = parentdata.contract_status;
                $(function () {
                    if( self.status_name == "new"){
                        // $('#new').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");

                        $("#new").addClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById("new").classList.add("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "running")
                    {
                        // $('#running').classList.add("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");
                        $("#running").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById('running').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "toRenew")
                    {
                        $("#toRenew").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');

                        // document.getElementbyId('toRenew').classList.add('oe_active');
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "expired")
                    {
                        // $('#expired').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");

                        $("#expired").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        // document.getElementbyId('expired').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }
                    else if( self.status_name == null)
                    {
                        $("#expired").removeClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');

                        // document.getElementbyId('expired').classList.remove('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }

                })


                console.log(parentdata);
                self.$http.post("/Employees/selectemployee", {"id":self.employee_id}).then(function (res) {
                    var data = res.body.data[0];
                    self.employeename = data.employeename;
                    self.$http.post("/Employees/selectdep", {"id":self.department_id}).then(function (res) {
                        var datas = res.body.data[0];
                        self.d_name = datas.name;
                        self.$http.post("/Employees/selectcontractype", {"id":self.contract_type}).then(function (res) {
                            var dept = res.body.data[0];
                            self.contractname = dept.name;
                            console.log(dept.name);
                            self.$http.post("/Employees/selectworkschedule", {"id":self.working_schedule_id}).then(function (res) {
                                var workSchedule = res.body.data[0];
                                self.workschedule = workSchedule.name;
                                console.log(workSchedule.workschedule );

                            }, function (err) {

                            });
                        }, function (err) {

                        });
                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });
        },
        deleteContract: function () {
            var self = this;
            self.$http.post("/Employees/deleteSelectedContract", {"id": self.$route.params.id }).then(function(res){
                alert("Are you sure you want to delete the contract???");
                console.log("this is the id of contract to be deleted =  "+self.$route.params.id);
            },function(err){

            });
        },
        select2: function (id) {
            var self = this
            self.status_name = id;

        },
        select: function () {
            var self = this;
            // self.$http.post("/Employees/fetchContactStatus", {"statname": self.name}).then(function(res){self.status_name_drop =res.body.result;},function(err){
            // });
            self.$http.post("/Employees/selectcontractinfo", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.reference = parentdata.reference;
                self.employee_id = parentdata.employee_id;
                self.job_tittle = parentdata.job_tittle;
                self.department_id = parentdata.department_id;
                self.contract_type = parentdata.contract_type;
                self.wage = parentdata.wage;
                self.advantages = parentdata.advantages;
                self.trial_period_duration_from = parentdata.trial_period_duration_from;
                self.trial_period_duration_to = parentdata.trial_period_duration_to;
                self.duration_to = parentdata.duration_to;
                self.duration_from = parentdata.duration_from;
                self.working_schedule_id = parentdata.working_schedule_id;
                self.notes = parentdata.notes;
                self.visa_no = parentdata.visa_no;
                self.work_permit_no = parentdata.work_permit_no;
                self.visa_expire_date = parentdata.visa_expire_date;
                self.status_name = parentdata.contract_status;
                $(function () {
                    if( self.status_name == "new"){
                        // $('#new').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");

                        $("#new").addClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById("new").classList.add("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "running")
                    {
                        // $('#running').classList.add("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");
                        // $('#expired').classList.remove("oe_active");
                        $("#running").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#toRenew").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');
                        // document.getElementById('running').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "toRenew")
                    {
                        $("#toRenew").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#expired").removeClass('oe_active');

                        // document.getElementbyId('toRenew').classList.add('oe_active');
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("expired").classList.remove("oe_active");
                    }
                    else if( self.status_name == "expired")
                    {
                        // $('#expired').classList.add("oe_active");
                        // $('#running').classList.remove("oe_active");
                        // $('#new').classList.remove("oe_active");
                        // $('#toRenew').classList.remove("oe_active");

                        $("#expired").addClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#reRenew").removeClass('oe_active');
                        // document.getElementbyId('expired').classList.add('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }
                    else if( self.status_name ==null)
                    {
                        $("#expired").removeClass('oe_active');
                        $("#new").removeClass('oe_active');
                        $("#running").removeClass('oe_active');
                        $("#reRenew").removeClass('oe_active');

                        // document.getElementbyId('expired').classList.remove('oe_active');
                        // document.getElementById("new").classList.remove("oe_active");
                        // document.getElementById("running").classList.remove("oe_active");
                        // document.getElementById("toRenew").classList.remove("oe_active");
                        // $('#d').show();
                        // $('#a').show();
                        // $('#q').show();
                    }

                })


                console.log(parentdata);
                self.$http.post("/Employees/selectemployee", {"id":self.employee_id}).then(function (res) {
                    var data = res.body.data[0];
                    self.employeename = data.employeename;
                    self.$http.post("/Employees/selectdep", {"id":self.department_id}).then(function (res) {
                        var datas = res.body.data[0];
                        self.d_name = datas.name;
                        self.$http.post("/Employees/selectcontractype", {"id":self.contract_type}).then(function (res) {
                            var dept = res.body.data[0];
                            self.contractname = dept.name;
                            console.log(dept.name);
                            self.$http.post("/Employees/selectworkschedule", {"id":self.working_schedule_id}).then(function (res) {
                                var workSchedule = res.body.data[0];
                                self.workschedule = workSchedule.name;
                                console.log(workSchedule.workschedule );

                            }, function (err) {

                            });
                        }, function (err) {

                        });
                    }, function (err) {

                    });
                }, function (err) {

                });
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
