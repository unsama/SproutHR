
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        var self = this;
        self.select();
        $(function(){
            var
                form = $('.form'),
                cache_width = form.width(),
                a4 = [595.28, 841.89]; // for a4s size paper width and height

            $('#create_pdf').on('click', function () {
                $('body').scrollTop(0);
                createPDF();
            });
            //create pdf
            function createPDF() {
                getCanvas().then(function (canvas) {
                    var
                        img = canvas.toDataURL("image/png"),
                        doc = new jsPDF({
                            unit: 'px',
                            format: 'a4'
                        });
                    doc.addImage(img, 'JPEG', 20, 20);
                    doc.save('Badge.pdf');
                    form.width(cache_width);
                });
            }
            // create canvas object
            function getCanvas() {
                form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
                return html2canvas(form, {
                    imageTimeout: 2000,
                    removeContainer: true
                });
            }
        });



    },

    data(){
        return {
            employeename:'',
            workaddressId:'',
            workEmail:'',
            workPhone:'',
            workMobile:'',
            workLocation:'',
            departmentId:'',
            jobTitle:'',
            jobTitleId:'',
            employeeManagerId:'',
            coachId:'',
            countryId:'',
            workTimeId:'',
            identificationNo:'',
            passportNo:'',
            employeeBankAccId:'',
            workPermitNo:'',
            martialStatus:'',
            noOfChildren:'',
            homeAddressId:'',
            dateOfBirth:'',
            placeOfBirth:'',
            timeSheetCost:'',
            accountId:'',
            medicalExam:'',
            companyVehicle:'',
            homeWorkDistance:'',
            relatedUserId:'',
            badgeId:'',
            pin:'',
            manualAttendance:'',
            workingAddress:'',
            departmentName:'',
            emplyeeManagerName:'',
            coachName:'',
            wokingTimeName:'',
            countryname:'',
            bankAccNo:'',
            homeAddress:'',
            accountname:'',
            relatedUser:'',
            r: true,
            t:false,
            k:false,
            y:false,
            p:true,
            f:false,
            l:false,
            u:false,
            counter: 0,
            m: 'Log an internals note which will not be sent to followers, but which can be read by users accessing this document.',
            message: 'To: Followers of "PO00007: 637.50 Rs."',
            v: false,
            nextactivity: "Employees/Enrique Jones",
            btnlinks: {
                printsbtnlink:"",
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
        // submit_inside: function () {
        //     var self = this;
        //     //alert(self.current_company+ " ");
        //     self.$http.post("/Employees/deleteSelectedEmployee", {"id": self.$route.params.id }).then(function(res){
        //         console.log(res.body);
        //     },function(err){
        //         //alert(err);
        //     });
        // },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/selectemployeeinfo", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.employeename = parentdata.employeename;
                console.log(" employeeName for badge  "+self.employeename);
                console.log(parentdata);

                self.$http.post("/recruitment/selectworkaddress", {"id":self.workAddressId}).then(function (res) {
                    var datas = res.body.data[0];
                    self.workingAddress = datas.address;
                    self.$http.post("/recruitment/selectdepartment", {"id":self.departmentId}).then(function (res) {
                        var dept = res.body.data[0];
                        self.departmentName = dept.name;
                        console.log(dept.name);
                        self.$http.post("/recruitment/selectjobtitles", {"id":self.jobTitleId}).then(function (res) {
                            var dept = res.body.data[0];
                            self.jobTitle = dept.job_tittle;
                            console.log(dept.job_tittle);
                            self.$http.post("/recruitment/selectmanager", {"id":self.employeeManagerId}).then(function (res) {
                                var dept = res.body.data[0];
                                self.emplyeeManagerName = dept.employeename;
                                console.log(dept.employeename);
                                self.$http.post("/recruitment/selectcoach", {"id":self.coachId}).then(function (res) {
                                    var dept = res.body.data[0];
                                    self.coachName = dept.employeename;
                                    console.log(dept.employeename);
                                    self.$http.post("/recruitment/selectworkschedule", {"id":self.workingTimeId}).then(function (res) {
                                        var workSchedule = res.body.data[0];
                                        self.wokingTimeName = workSchedule.name;
                                        console.log(workSchedule.name );
                                        self.$http.post("/recruitment/selectcountry", {"id":self.countryId}).then(function (res) {
                                            var workSchedule = res.body.data[0];
                                            self.countryname = workSchedule.country_name;
                                            console.log(workSchedule.country_name );
                                            self.$http.post("/recruitment/selectbankaccountNo", {"id":self.employeeBankAccId}).then(function (res) {
                                                var workSchedule = res.body.data[0];
                                                self.bankAccNo = workSchedule.account_number;
                                                console.log(workSchedule.account_number );
                                                self.$http.post("/recruitment/selecthomeAddress", {"id":self.homeAddressId}).then(function (res) {
                                                    var workSchedule = res.body.data[0];
                                                    self.homeAddress = workSchedule.address;
                                                    console.log(workSchedule.address );
                                                    self.$http.post("/recruitment/selectaccount", {"id":self.accountId}).then(function (res) {
                                                        var workSchedule = res.body.data[0];
                                                        self.accountname = workSchedule.name;
                                                        console.log(workSchedule.name );
                                                        self.$http.post("/recruitment/selectrelateduser", {"id":self.relatedUserId}).then(function (res) {
                                                            var workSchedule = res.body.data[0];
                                                            self.relatedUser = workSchedule.username;
                                                            console.log(workSchedule.username );

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
                }, function (err) {

                });
            }, function (err) {

            });

        },
    },

    components: {

        DashboardController





    }

}
