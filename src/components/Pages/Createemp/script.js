import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import jobs from "./../../partials/jobs/jobs.vue"
import contactmodaledit from "./../../partials/contactmodaledit/contactmodaledit.vue"
export default {
    created: function () {
        var self = this;
        self.select();
        $(function () {
            $("#hide").click(function(){
                $("#hide").hide();
            });
            $("#show").click(function(){
                $("#show").hide();
            });
            $("#show").click(function(){
                $("#hide").show();
            });
            $("#hide").click(function(){
                $("#show").show();
            });
            $('#c').hide();
            $('#sp').hide();
            $('#ss').hide();
            $('#job').on('change',function(){
                var ab = $('#job option:selected').val();
                if(ab== null){
                    $('#sp').hide();
                }
                else{
                    $('#sp').show();
                }
            });
            $('.e').on('change',function(){
                var ab = $('.e option:selected').val();
            });
            $(".dept_dropdownjob").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit"){
                    $(".bd-example-modal-lgj1").modal('show');
                }
            });
            $(".dept_dropdownemp").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit"){
                    $(".bd-example-modal-lge1").modal('show');
                }
            });
            $(".dept_dropdown").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit"){
                    $(".bd-example-modal-lg1").modal('show');
                }
            });
            //department modal work start from here
            $('#abcs').on('change',function(){
                var ab = $('#abcs option:selected').val();
                if(ab== null){
                    $('#ss').hide();
                }
                else{
                    $('#ss').show();
                }
            });
            $(".dept_dropdown").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit"){
                    $(".bd-example-modal-lg1").modal('show');
                }
            });
            //contact modal work start from
            $('#contact').on('change',function(){
                var ab = $('#contact option:selected').val();
                if(ab== null){
                    $('#c').hide();
                }
                else{
                    $('#c').show();
                }
            });
            $(".dept_dropdowncontact").on('change',function(){
                var value = $(this).val();
                if(value=="Create and Edit"){

                    $(".bd-example-modal-lgc1").modal('show');
                }
            });
            $('#datepicker6').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);
            $('#datepicker7').datepicker({
                format: "dd.mm.yyyy",
                todayBtn: "linked",
                language: "de",
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "4",
                todayHighlight: true,
            }).on('changeDate',showTestDate);
            function showTestDate() {
                var value = $('#datepicker6').datepicker('getFormattedDate');
                self.dates_value6 = value;
                var value1 = $('#datepicker7').datepicker('getFormattedDate');
                self.dates_value7 = value1;
            };
            $("#save").click(function () {
                self.submit();
                window.location.href = "/attendance/Grids";
            });
        });
    },
    data() {
        return {
            optionsj2: '',
            optionsj: '',
            optionsj3: '',
            managers1:'',
            managerId1:'',
            departnents1:'',
            departmentId1:'',
            departName: '',
            dates_value6:'', //birthDates
            dates_value7:'',//mediacalExamDate
            employeeName: '',
            workingAddresses: '',
            workingAddressId: '',
            departnents: '',
            departmentId: '',
            jobTitles: '',
            jobtitleId: '',
            managers: '',
            managerId: '',
            coachs: '',
            coachId: '',
            workingTimes: '',
            workingTimeId: '',
            workMobile: '',
            workLocation: '',
            workEmail: '',
            workPhone: '',
            identificationNo: '',
            passportNo: '',
            nmanager_id: '',
            nparent_dept_id: '',
            nname: '',
            mname: '',
            mparent_dept_id: '',
            mmanager_id: '',
            countries: '',
            countryId: '',
            BankAccountNumbers: '',
            BankAccountNumbersId: '',
            homeAddresses: '',
            homeAddressId: '',
            gender: '',
            maritalStatus: '',
            noOfChildren: '',
            birthDate: '',
            placeOfBirth: '',
            timeSheetCost: '',
            accounts: '',
            accountId: '',
            options2: '',
            options: '',
            companies: '',
            companyId: '',
            relatedUsers: '',
            relatedUserId: '',
            badgeId: '',
            pin: '',
            manualAttendance: '',
            medicalExamDate: '',
            companyVehicle: '',
            HomeDistance: '',
            status: '',
            nextactivity: "Next ActivitiesNeed / to customize the solutions",
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
            //contactmodal
            title: '',
            num: '',
            counter: 1,
            name: '',
            company: '',
            individual: '',
            street1: '',
            tags: '',
            street2: '',
            company_name: '',
            options:'',
            options1:'',
            options2:'',
            options3:'',
            options4:'',
            options5:'',
            fax_number:'',
            job_position:'',
            phone_number:'',
            mobile_number:'',
            email:'',
            language:'',
            is_Customer:'',
            account_payable:'',
            account_reciveable:'',
            notes_id:'',
            pid:'',
            names:[],
            names1:[],
            is_sales_person:'',
            sale_pricelist:'',
            internal_reference_id:'',
            bank_account_id:'',
            credit_card_id:'',
            is_vendor:'',
            barcode:'',
            states:'',
            customer_payment_terms:'',
            degree_of_trust:'',
            vendor_payment_terms:'',
            aname:'',
            bname:'',
            zip:'',
            country:'',
            website:'',
            //modals
            mname: '',
            mcompany: '',
            mindividual: '',
            mstreet1: '',
            mstreet2: '',
            mcompany_name: '',
            moptions:'',
            moptions1:'',
            moptions2:'',
            moptions3:'',
            moptions4:'',
            moptions5:'',
            mjob_position:'',
            mphone_number:'',
            mmobile_number:'',
            mfax_number:'',
            memail:'',
            mcity:'',
            mzip:'',
            mlanguage:'',
            mis_Customer:'',
            mis_sales_person:'',
            msale_pricelist:'',
            minternal_reference_id:'',
            mbank_account_id:'',
            mcredit_card_id:'',
            mis_vendor:'',
            mcountry:'',
            mbarcode:'',
            maddress:'',
            names: [],
            mnotes_id:'',
            ids:'',
            lasting:0,
            mnotes:'',
            mtitle:'',
            maccount_reciveable:'',
            maccount_payable:'',
            mcustomer_payment_terms:'',
            mdegree_of_trust:'',
            mvendor_payment_terms:'',

            //createmodal
            nname: '',
            ncompany: '',
            nindividual: '',
            nstreet1: '',
            nstreet2: '',
            ncompany_name: '',
            moptions5:'',
            njob_position:'',
            nphone_number:'',
            nmobile_number:'',
            nfax_number:'',
            nemail:'',
            ncity:'',
            nzip:'',
            nlanguage:'',
            ncountry:'',
            nbarcode:'',
            naddress:'',
            nnotes_id:'',
            nnotes:'',
            ntitle:'',
            naccount_reciveable:'',
            naccount_payable:'',
            ncustomer_payment_terms:'',
            ndegree_of_trust:'',
            nvendor_payment_terms:'',
            btnlinks: {
                createbtnlink: "#/app/sales/salescustomeredit",
                savebtnlink: "",
                discardbtnlink: "/attendance/Grids",
                importbtnlink: "#/app/imported"
            },

            tableheader: [
                " Name",
                " Day of Week",
                " Work from",
                " Work to",
                " Starting Date",
                " End Date",


            ],
            tabledata: {
                "row": {
                    "data": [
                        "contract",
                        "Hassan",
                        "Employee",
                        "Developer",
                        "3/1/12",
                        "3/1/12",
                    ],


                },

            },
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
                "",



            ],
            tableheader2: [
                " Reason",
                " Resource",
                " Working Time",
                " Start Date",
                " End Date",


            ],
            tabledata2: {
                "row": {
                    "data": [
                        "contract",
                        "Hassan",
                        "Employee",
                        "3/1/12",
                        "3/1/12",
                    ],


                },

            },
            tablefooter2:[
                "",
                "",
                "",
                "",
                "",
                "",



            ],
        }
    },

    methods: {

        updateDepart: function () {
            var self = this;
            self.$http.post("/recruitment/addNewDepartment", {
                "departName": self.departName,"parentDeptId":self.parentDeptId, "managerId":self.managerId
            }).then(function(res){
                //console.log(res.body);
            },function(err){

            });

        },


        // SelectContactInfo: function () {
        //     var value = $(this).val();
        //     console(value);
        //     if (!(value == "Create and Edit..." || value == "Search More..." || value=="undefined")) {
        //
        //
        //         var self = this;
        //         self.$http.post("/recruitment/fetchContactInformationOfEmployee", {
        //             "workingAddressId": self.workingAddressId,
        //         }).then(function (res) {
        //             var contactInfo = res.body.data[0];
        //             // alert(err);
        //         });
        //
        //     }
        //             self.workMobile = contactInfo.work_mobile;
        //             //self.workLocation = contactInfo.name;
        //             self.workEmail = contactInfo.work_email;
        //             self.workPhone = contactInfo.work_phone;
        //
        //         }, function (err) {
        // },

        selectDepartManagerHussain: function () {
            var value = $(this).val();
            var self = this;
            //alert("Inside Method selectDepartManagerHussain(): departmentId  =  "+ self.departmentId);
            self.$http.post("/recruitment/fetchDeptManager", {
                "departmentId": self.departmentId,

            }).then(function (res) {
                var deptManager = res.body.result[0];

                console.log(deptManager);
                self.managerId = deptManager.employeename;
                console.log(self.managerId);

            }, function (err) {
                alert(err);
            });


        },
        select: function () {
            var self = this;
            self.$http.post("/recruitment/fetchWorkingAddresses", {"workingAddress": self.address}).then(function (res) {
                self.workingAddresses = res.body.result;
            }, function (err) {
                //alert(err);
            });

            // self.$http.post("/employees /fetchdeparments", {"id": self.$route.params.id}).then(function (res) {
            //     self.names = res.body.data;
            //
            //     alert(self.names);
            // },function(err){
            //     // alert(err);
            // });

            self.$http.post("/recruitment/fetchDepartments", {"deptName": self.name}).then(function (res) {
                self.departnents = res.body.result;
            }, function (err) {
                // alert(err);
            });
            self.$http.post("/recruitment/fetchDepartments1", {"deptName": self.name}).then(function (res) {
                self.departnents1 = res.body.result;
            }, function (err) {
                // alert(err);
            });

            self.$http.post("/recruitment/fetchJobTitles", {"jobTitle_name": self.job_title}).then(function (res) {
                self.jobTitles = res.body.result;
            }, function (err) {
                // alert(err);
            });

            self.$http.post("/recruitment/fetchManagers", {"managerName": self.employeename}).then(function (res) {
                self.managers = res.body.result;
            }, function (err) {
                //alert(err);
            });
            self.$http.post("/recruitment/fetchManagers1", {"managerName": self.employeename}).then(function (res) {
                self.managers1 = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/recruitment/fetchCoachs", {"coach_name": self.employeename}).then(function (res) {
                self.coachs = res.body.result;
            }, function (err) {
                // alert(err);
            });

                    self.$http.post("/recruitment/fetchWorkingTimeNames", {"workingTime": self.name}).then(function (res) {
                        self.workingScedules = res.body.result;
            }, function (err) {
                        // alert(err);
            });
            // self.$http.post("/employees/fetchmanager", {"manager_name": self.employeename	}).then(function(res){self.emp_table =res.body.result;},function(err){
            //     //alert(err);
            // });.


            self.$http.post("/recruitment/fetchHomeAddresses", {"HomeAddress": self.name}).then(function (res) {
                self.homeAddresses = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/recruitment/FetchBankAccountNumbers", {"AccNo": self.account_number}).then(function (res) {
                self.BankAccountNumbers = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/recruitment/fetchCountries", {"countryName": self.country}).then(function (res) {
                self.countries = res.body.result;
            }, function (err) {
                //alert(err);
            });
            //acoountTable
            self.$http.post("/recruitment/fetchAccounts", {"accName": self.name}).then(function (res) {
                self.accounts = res.body.result;
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/recruitment/fetchCompanies", {"companyName": self.company_name}).then(function (res) {
                self.companies = res.body.result;
            }, function (err) {
            });
            self.$http.post("/recruitment/fetchRelatedUsers", {"relatedUser": self.username}).then(function (res) {
                self.relatedUsers = res.body.result;
            }, function (err) {
                //alert(err);
            });
        },
        submit: function () {
            var self = this;
            self.$http.post("/recruitment/addNewEmployee", {
                "employeeName": self.employeeName,
                "workingAddressId": self.workingAddressId,
                "workMobile": self.workMobile,//job_title
                "workLocation": self.workLocation,// department name
                "workEmail": self.workEmail,
                "workPhone": self.workPhone,
                "departmentId": self.departmentId,
                "jobtitleId": self.jobtitleId,
                "managerId": self.managerId,
                "coachId": self.coachId,
                "workingTimeId": self.workingTimeId,
                "countryId": self.countryId,
                "identificationNo": self.identificationNo,
                "passportNo": self.passportNo,
                "BankAccountNumbersId": self.BankAccountNumbersId,
                "homeAddressId": self.homeAddressId,
                "accountId": self.accountId,
                "gender": self.gender,
                "maritalStatus": self.maritalStatus,
                "relatedUserId": self.relatedUserId,
                "pin": self.pin,
                "badgeId": self.badgeId,
                "manualAttendance": self.manualAttendance,
                "dates_value7": self.dates_value7,
                "companyVehicle": self.companyVehicle,
                "HomeDistance": self.HomeDistance,
                "noOfChildren": self.noOfChildren,
                "dates_value6": self.dates_value6,
                "placeOfBirth": self.placeOfBirth,
                "timeSheetCost": self.timeSheetCost,
                "status": self.status,

            }).then(function (res) {
                console.log(res.body);
            }, function (err) {
                //alert(err);
            });

            self.$http.post("/recruitment/addemp", {
                "dep_name": self.name, "p_dep_id": self.parent_dept_id, "mgr_id": self.identification_number
            }).then(function (res) {
                //console.log(res.body);
            }, function (err) {
                //alert(err);
            });


        },
//modal work starts from heres
// department modal
        submitmodaledit: function () {
            var self = this;
            self.$http.post("/recruitment/Editreqsmodal", {"id": self.departmentId,"name": self.nname,"parent_dept_id": self.nparent_dept_id,"manager_id": self.nmanager_id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/fetchDepartments", {"deptName": self.name}).then(function (res) {
                self.departnents = res.body.result;
            }, function (err) {
                // alert(err);
            });
        },
        submitmodal: function () {
            var self = this;
            self.$http.post("/recruitment/depinsertmodal", {"name": self.mname,"parent_dept_id": self.mparent_dept_id,"manager_id": self.mmanager_id}).then(function(res){
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/recruitment/fetchDepartments", {"deptName": self.name}).then(function (res) {
                self.departnents = res.body.result;
            }, function (err) {
                // alert(err);
            });
        },
        select2: function () {
            var self = this;
            self.$http.post("/recruitment/depss", {"id": self.departmentId}).then(function (res) {
                var parentdata = res.body.data[0];
                self.nname = parentdata.name;
                self.nparent_dept_id = parentdata.parent_dept_id;
                self.nmanager_id = parentdata.manager_id;
                console.log(res.body)
                self.$http.post("/recruitment/deps", {
                }).then(function(res){
                    self.options2 =res.body.data;
                    console.log(res.body);
                },function(err){
                    alert(err);
                });
                self.$http.post("/recruitment/emps", {

                }).then(function(res){
                    self.options =res.body.data;
                    console.log(res.body);
                },function(err){

                });
            }, function (err) {
            });

        },
//Contact modal work starts from here
        insertcontact: function () {
            var self = this;
            self.$http.post("/recruitment/createcontact", {
                "name": self.name,
                "tags": self.tags,
                "individual": self.individual,
                "company": self.company,
                "address": self.address,
                "street1": self.street1,
                "street2": self.street2,
                "city": self.city,
                "states": self.states,
                "zip": self.zip,
                "last": self.last,
                "country": self.country,
                "title": self.title,
                "website": self.website,
                "account_payable": self.account_payable,
                "job_position": self.job_position,
                "phone_number": self.phone_number,
                "mobile_number": self.mobile_number,
                "fax_number": self.fax_number,
                "email": self.email,
                "language": self.language,
                "notes_id": self.notes_id,
                "is_Customer": self.is_Customer,
                "is_sales_person": self.is_sales_person,
                "sale_pricelist": self.sale_pricelist,
                "internal_reference_id": self.internal_reference_id,
                "bank_account_id": self.bank_account_id,
                "credit_card_id": self.credit_card_id,
                "is_vendor": self.is_vendor,
                "barcode": self.barcode,
                "account_reciveable": self.account_reciveable,
                "customer_payment_terms": self.customer_payment_terms,
                "degree_of_trust": self.degree_of_trust,
                "vendor_payment_terms": self.vendor_payment_terms,
            }).then(function(res){
                console.log(res.body);
            },function(err){
                if(!(typeof res.body.detail === 'undefined')){

                    window.location.href = "/contact";
                }
                else {
                    window.location.href = "/contact";
                }

            });
        },
        selectcontact: function () {
            var self = this;
            self.$http.post("/contact/selectchild", {"id":self.$route.params.id}).then(function (res) {
                self.names = res.body.data;

            },function(err){

            });

            self.$http.post("/contact/company_name", {
                "name": self.name,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/state", {
                "name": self.name,
            }).then(function(res){
                self.options1 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/country", {
                "name": self.name,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/tags", {
                "name": self.name,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/lastcontactid", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.last = parentdata.id;
                console.log(self.last);

            },function(err){

            });
            self.$http.post("/contact/selectacoount", {
                "name": self.name,
            }).then(function(res){
                self.options5 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectuser", {
                "name": self.name,
            }).then(function(res){
                self.options4 =res.body.data;
                console.log(res.body);
            },function(err){

            });
        },
        selectcontactedit: function () {
            var self = this;
            self.$http.post("/contact/company_name", {
                "name": self.name,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/state", {
                "name": self.name,
            }).then(function(res){
                self.options1 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/country", {
                "name": self.name,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/tags", {
                "name": self.name,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectacoount", {
                "name": self.name,
            }).then(function(res){
                self.options5 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectuser", {
                "name": self.name,
            }).then(function(res){
                self.options4 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectcontactinfo", {"id": self.workingAddressId}).then(function (res) {
                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.pid = parentdata.id;
                self.company = parentdata.company;
                self.individual = parentdata.individual;
                self.street1 = parentdata.street1;
                self.street2 = parentdata.street2;
                self.city = parentdata.city;
                self.states = parentdata.states;
                self.zip = parentdata.zip;
                self.country = parentdata.country;
                self.title = parentdata.title;
                self.website = parentdata.website;
                self.job_position = parentdata.job_position;
                self.phone_number = parentdata.phone_number;
                self.mobile_number = parentdata.mobile_number;
                self.fax_number = parentdata.fax_number;
                self.email = parentdata.email;
                self.language = parentdata.language;
                self.notes_id = parentdata.notes_id;
                self.notes = parentdata.notes;
                self.is_Customer = parentdata.is_Customer.data;
                self.is_sales_person = parentdata.is_sales_person;
                self.sale_pricelist = parentdata.sale_pricelist;
                self.internal_reference_id = parentdata.internal_reference_id;
                self.account_reciveable = parentdata.account_reciveable;
                self.account_payable = parentdata.account_payable;
                self.is_vendor = parentdata.is_vendor.data;
                self.barcode = parentdata.barcode;
                self.customer_payment_terms = parentdata.customer_payment_terms;
                self.degree_of_trust = parentdata.degree_of_trust;
                self.vendor_payment_terms = parentdata.vendor_payment_terms;
                console.log(parentdata);
                self.$http.post("/contact/selectnote", {"notes_id":self.notes_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.notes = data.notes;
                        //console.log(self.job_tittle);
                        self.$http.post("/contact/selectchild", {"id":self.$route.params.id}).then(function (res) {
                                self.names = res.body.data;
                                console.log(self.names);
                                self.$http.post("/contact/mycontact", {"child_contact_id": self.child_contact_id}).then(function (res) {


                                        // console.log(res.body);
                                        self.$http.post("/contact/selectaccount", {"account_reciveable":self.account_reciveable}).then(function (res) {
                                                var data1 = res.body.data[0];
                                                self.aname = data1.aname;

                                                console.log(data1);

                                                // console.log(res.body);
                                                self.$http.post("/contact/account_payable", {"account_payable":self.account_payable}).then(function (res) {
                                                        var data1 = res.body.data[0];
                                                        self.bname = data1.bname;
                                                        console.log(data1);
                                                        // console.log(res.body);
                                                    },
                                                    function (err) {

                                                    });
                                            },
                                            function (err) {

                                            });
                                    },
                                    function (err) {

                                    });
                            },
                            function (err) {

                            });
                    },

                    function (err) {

                    });
            }, function (err) {

            });
        },
        submiteditcontact: function () {
            var self = this;
            self.$http.post("/contact/createcontactedit", {
                "name": self.name,
                "lasting": self.lasting,
                "individual": self.individual,
                "company": self.company,
                "address": self.address,
                "street1": self.street1,
                "street2": self.street2,
                "city": self.city,
                "states": self.states,
                "zip": self.zip,
                "notes": self.notes,
                "country": self.country,
                "title": self.title,
                "website": self.website,
                "account_payable": self.account_payable,
                "job_position": self.job_position,
                "phone_number": self.phone_number,
                "mobile_number": self.mobile_number,
                "fax_number": self.fax_number,
                "email": self.email,
                "language": self.language,
                "notes_id": self.notes_id,
                "is_Customer": self.is_Customer,
                "is_sales_person": self.is_sales_person,
                "sale_pricelist": self.sale_pricelist,
                "internal_reference_id": self.internal_reference_id,
                "bank_account_id": self.bank_account_id,
                "credit_card_id": self.credit_card_id,
                "is_vendor": self.is_vendor,
                "barcode": self.barcode,
                "account_reciveable": self.account_reciveable,
                "customer_payment_terms": self.customer_payment_terms,
                "degree_of_trust": self.degree_of_trust,
                "id": self.workingAddressId,
                "vendor_payment_terms": self.vendor_payment_terms,

            }).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        selectcontactedits: function () {
            var self = this;
            self.$http.post("/contact/company_name", {
                "name": self.name,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/state", {
                "name": self.name,
            }).then(function(res){
                self.options1 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/country", {
                "name": self.name,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/contact/tags", {
                "name": self.name,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectacoount", {
                "name": self.name,
            }).then(function(res){
                self.options5 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectuser", {
                "name": self.name,
            }).then(function(res){
                self.options4 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectcontactinfo", {"id": self.workingAddressId}).then(function (res) {
                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.pid = parentdata.id;
                self.company = parentdata.company;
                self.individual = parentdata.individual;
                self.street1 = parentdata.street1;
                self.street2 = parentdata.street2;
                self.city = parentdata.city;
                self.states = parentdata.states;
                self.zip = parentdata.zip;
                self.country = parentdata.country;
                self.title = parentdata.title;
                self.website = parentdata.website;
                self.job_position = parentdata.job_position;
                self.phone_number = parentdata.phone_number;
                self.mobile_number = parentdata.mobile_number;
                self.fax_number = parentdata.fax_number;
                self.email = parentdata.email;
                self.language = parentdata.language;
                self.notes_id = parentdata.notes_id;
                self.notes = parentdata.notes;
                self.is_Customer = parentdata.is_Customer.data;
                self.is_sales_person = parentdata.is_sales_person;
                self.sale_pricelist = parentdata.sale_pricelist;
                self.internal_reference_id = parentdata.internal_reference_id;
                self.account_reciveable = parentdata.account_reciveable;
                self.account_payable = parentdata.account_payable;
                self.is_vendor = parentdata.is_vendor.data;
                self.barcode = parentdata.barcode;
                self.customer_payment_terms = parentdata.customer_payment_terms;
                self.degree_of_trust = parentdata.degree_of_trust;
                self.vendor_payment_terms = parentdata.vendor_payment_terms;
                console.log(parentdata);
                self.$http.post("/contact/selectnote", {"notes_id":self.notes_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.notes = data.notes;
                        //console.log(self.job_tittle);
                        self.$http.post("/contact/selectchild", {"id":self.workingAddressId}).then(function (res) {
                                self.names = res.body.data;
                                console.log(self.names);
                                self.$http.post("/contact/mycontact", {"child_contact_id": self.child_contact_id}).then(function (res) {


                                        // console.log(res.body);
                                        self.$http.post("/contact/selectaccount", {"account_reciveable":self.account_reciveable}).then(function (res) {
                                                var data1 = res.body.data[0];
                                                self.aname = data1.aname;

                                                console.log(data1);

                                                // console.log(res.body);
                                                self.$http.post("/contact/account_payable", {"account_payable":self.account_payable}).then(function (res) {
                                                        var data1 = res.body.data[0];
                                                        self.bname = data1.bname;
                                                        console.log(data1);
                                                        // console.log(res.body);
                                                    },
                                                    function (err) {

                                                    });
                                            },
                                            function (err) {

                                            });
                                    },
                                    function (err) {

                                    });
                            },
                            function (err) {

                            });
                    },

                    function (err) {

                    });
            }, function (err) {

            });
        },
        selectcontactedits2: function () {
            var self = this;
            self.$http.post("/contact/company_name", {
                "name": self.name,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/state", {
                "name": self.name,
            }).then(function(res){
                self.options1 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/country", {
                "name": self.name,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/contact/tags", {
                "name": self.name,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectacoount", {
                "name": self.name,
            }).then(function(res){
                self.options5 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectuser", {
                "name": self.name,
            }).then(function(res){
                self.options4 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectcontactinfo", {"id": self.homeAddressId}).then(function (res) {
                var parentdata = res.body.data[0];
                self.name = parentdata.name;
                self.pid = parentdata.id;
                self.company = parentdata.company;
                self.individual = parentdata.individual;
                self.street1 = parentdata.street1;
                self.street2 = parentdata.street2;
                self.city = parentdata.city;
                self.states = parentdata.states;
                self.zip = parentdata.zip;
                self.country = parentdata.country;
                self.title = parentdata.title;
                self.website = parentdata.website;
                self.job_position = parentdata.job_position;
                self.phone_number = parentdata.phone_number;
                self.mobile_number = parentdata.mobile_number;
                self.fax_number = parentdata.fax_number;
                self.email = parentdata.email;
                self.language = parentdata.language;
                self.notes_id = parentdata.notes_id;
                self.notes = parentdata.notes;
                self.is_Customer = parentdata.is_Customer.data;
                self.is_sales_person = parentdata.is_sales_person;
                self.sale_pricelist = parentdata.sale_pricelist;
                self.internal_reference_id = parentdata.internal_reference_id;
                self.account_reciveable = parentdata.account_reciveable;
                self.account_payable = parentdata.account_payable;
                self.is_vendor = parentdata.is_vendor.data;
                self.barcode = parentdata.barcode;
                self.customer_payment_terms = parentdata.customer_payment_terms;
                self.degree_of_trust = parentdata.degree_of_trust;
                self.vendor_payment_terms = parentdata.vendor_payment_terms;
                console.log(parentdata);
                self.$http.post("/contact/selectnote", {"notes_id":self.notes_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.notes = data.notes;
                        //console.log(self.job_tittle);
                        self.$http.post("/contact/selectchild", {"id":self.workingAddressId}).then(function (res) {
                                self.names = res.body.data;
                                console.log(self.names);
                                self.$http.post("/contact/mycontact", {"child_contact_id": self.child_contact_id}).then(function (res) {


                                        // console.log(res.body);
                                        self.$http.post("/contact/selectaccount", {"account_reciveable":self.account_reciveable}).then(function (res) {
                                                var data1 = res.body.data[0];
                                                self.aname = data1.aname;

                                                console.log(data1);

                                                // console.log(res.body);
                                                self.$http.post("/contact/account_payable", {"account_payable":self.account_payable}).then(function (res) {
                                                        var data1 = res.body.data[0];
                                                        self.bname = data1.bname;
                                                        console.log(data1);
                                                        // console.log(res.body);
                                                    },
                                                    function (err) {

                                                    });
                                            },
                                            function (err) {

                                            });
                                    },
                                    function (err) {

                                    });
                            },
                            function (err) {

                            });
                    },

                    function (err) {

                    });
            }, function (err) {

            });
        },
        submit1: function () {
            var self = this;
            self.$http.post("/contact/createcontactedit", {
                "name": self.name,
                "lasting": self.lasting,
                "individual": self.individual,
                "tags": self.tags,
                "company": self.company,
                "address": self.address,
                "street1": self.street1,
                "street2": self.street2,
                "city": self.city,
                "states": self.states,
                "zip": self.zip,
                "notes": self.notes,
                "country": self.country,
                "title": self.title,
                "website": self.website,
                "account_payable": self.account_payable,
                "job_position": self.job_position,
                "phone_number": self.phone_number,
                "mobile_number": self.mobile_number,
                "fax_number": self.fax_number,
                "email": self.email,
                "language": self.language,
                "notes_id": self.notes_id,
                "is_Customer": self.is_Customer,
                "is_sales_person": self.is_sales_person,
                "sale_pricelist": self.sale_pricelist,
                "internal_reference_id": self.internal_reference_id,
                "bank_account_id": self.bank_account_id,
                "credit_card_id": self.credit_card_id,
                "is_vendor": self.is_vendor,
                "barcode": self.barcode,
                "account_reciveable": self.account_reciveable,
                "customer_payment_terms": self.customer_payment_terms,
                "degree_of_trust": self.degree_of_trust,
                "id": self.workingAddressId,
                "vendor_payment_terms": self.vendor_payment_terms,
            }).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        submit1c: function () {
            var self = this;
            self.$http.post("/contact/createcontactedit", {
                "name": self.name,
                "lasting": self.lasting,
                "individual": self.individual,
                "tags": self.tags,
                "company": self.company,
                "address": self.address,
                "street1": self.street1,
                "street2": self.street2,
                "city": self.city,
                "states": self.states,
                "zip": self.zip,
                "notes": self.notes,
                "country": self.country,
                "title": self.title,
                "website": self.website,
                "account_payable": self.account_payable,
                "job_position": self.job_position,
                "phone_number": self.phone_number,
                "mobile_number": self.mobile_number,
                "fax_number": self.fax_number,
                "email": self.email,
                "language": self.language,
                "notes_id": self.notes_id,
                "is_Customer": self.is_Customer,
                "is_sales_person": self.is_sales_person,
                "sale_pricelist": self.sale_pricelist,
                "internal_reference_id": self.internal_reference_id,
                "bank_account_id": self.bank_account_id,
                "credit_card_id": self.credit_card_id,
                "is_vendor": self.is_vendor,
                "barcode": self.barcode,
                "account_reciveable": self.account_reciveable,
                "customer_payment_terms": self.customer_payment_terms,
                "degree_of_trust": self.degree_of_trust,
                "id": self.homeAddressId,
                "vendor_payment_terms": self.vendor_payment_terms,
            }).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        insert3: function () {
            var self = this;
            self.$http.post("/contact/createcontactmodal", {
                "name": self.nname,
                "lasting": self.lasting,
                "individual": self.nindividual,
                "company": self.ncompany,
                "address": self.naddress,
                "street1": self.nstreet1,
                "street2": self.nstreet2,
                "city": self.ncity,
                "states": self.nstates,
                "zip": self.nzip,
                "country": self.ncountry,
                "title": self.ntitle,
                "website": self.nwebsite,
                "job_position": self.njob_position,
                "phone_number": self.nphone_number,
                "mobile_number": self.nmobile_number,
                "fax_number": self.nfax_number,
                "email": self.nemail,
                "language": self.nlanguage,
                "notes_id": self.nnotes_id,
            }).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        submit12: function () {
            var self = this;
            self.$http.post("/contact/createcontacteditmodal", {
                "name": self.mname,
                "id": self.ids,
                "individual": self.mindividual,
                "company": self.mcompany,
                "address": self.maddress,
                "street1": self.mstreet1,
                "street2": self.mstreet2,
                "city": self.mcity,
                "states": self.mstates,
                "zip": self.mzip,
                "notes": self.mnotes,
                "country": self.mcountry,
                "title": self.mtitle,
                "website": self.mwebsite,
                "account_payable": self.account_payable,
                "job_position": self.mjob_position,
                "phone_number": self.mphone_number,
                "mobile_number": self.mmobile_number,
                "fax_number": self.mfax_number,
                "email": self.memail,
                "language": self.language,
                "notes_id": self.mnotes_id,
            }).then(function(res){
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectchild", {"id":self.$route.params.id}).then(function (res) {
                self.names = res.body.data;
                console.log(self.names);
            },function(err){

            });
        },
        select51: function (id) {
            var self = this;
            self.ids=id;
            self.$http.post("/contact/selectcontactinfo1", {"id": id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.mname = parentdata.name;
                self.mcompany = parentdata.company;
                self.mindividual = parentdata.individual;
                self.mstreet1 = parentdata.street1;
                self.mstreet2 = parentdata.street2;
                self.mcity = parentdata.city;
                self.mstates = parentdata.states;
                self.mzip = parentdata.zip;
                self.mcountry = parentdata.country;
                self.mtitle = parentdata.title;
                self.mwebsite = parentdata.website;
                self.mjob_position = parentdata.job_position;
                self.mphone_number = parentdata.phone_number;
                self.mmobile_number = parentdata.mobile_number;
                self.mfax_number = parentdata.fax_number;
                self.memail = parentdata.email;
                self.mlanguage = parentdata.language;
                self.mnotes_id = parentdata.notes_id;
                console.log(self.mname);
                self.$http.post("/contact/selectnote1", {"notes_id":self.mnotes_id}).then(function (res) {
                        var data = res.body.data[0];
                        self.mnotes = data.notes;
                        //console.log(self.job_tittle);
                    },

                    function (err) {

                    });
            }, function (err) {

            });
        },
        //contact create modal
        insertc: function () {
            var self = this;
            self.$http.post("/contact/createcontact", {
                "name": self.name,
                "tags": self.tags,
                "individual": self.individual,
                "company": self.company,
                "address": self.address,
                "street1": self.street1,
                "street2": self.street2,
                "city": self.city,
                "states": self.states,
                "zip": self.zip,
                "last": self.last,
                "country": self.country,
                "title": self.title,
                "website": self.website,
                "account_payable": self.account_payable,
                "job_position": self.job_position,
                "phone_number": self.phone_number,
                "mobile_number": self.mobile_number,
                "fax_number": self.fax_number,
                "email": self.email,
                "language": self.language,
                "notes_id": self.notes_id,
                "is_Customer": self.is_Customer,
                "is_sales_person": self.is_sales_person,
                "sale_pricelist": self.sale_pricelist,
                "internal_reference_id": self.internal_reference_id,
                "bank_account_id": self.bank_account_id,
                "credit_card_id": self.credit_card_id,
                "is_vendor": self.is_vendor,
                "barcode": self.barcode,
                "account_reciveable": self.account_reciveable,
                "customer_payment_terms": self.customer_payment_terms,
                "degree_of_trust": self.degree_of_trust,
                "vendor_payment_terms": self.vendor_payment_terms,
            }).then(function(res){
                console.log(res.body);
            },function(err){
                if(!(typeof res.body.detail === 'undefined')){

                    window.location.href = "/contact";
                }
                else {
                    window.location.href = "/contact";
                }

            });
        },
        insert2: function () {
            var self = this;
            self.$http.post("/contact/createcontactmodal", {
                "name": self.mname,
                "individual": self.mindividual,
                "company": self.mcompany,
                "address": self.maddress,
                "lasting": self.lasting,
                "street1": self.mstreet1,
                "street2": self.mstreet2,
                "city": self.mcity,
                "states": self.mstates,
                "zip": self.mzip,
                "country": self.mcountry,
                "title": self.mtitle,
                "website": self.mwebsite,
                "account_payable": self.maccount_payable,
                "job_position": self.mjob_position,
                "phone_number": self.mphone_number,
                "mobile_number": self.mmobile_number,
                "fax_number": self.mfax_number,
                "email": self.memail,
                "language": self.mlanguage,
                "notes_id": self.mnotes_id,
            }).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        selectc: function () {
            var self = this;
            self.$http.post("/contact/selectchild", {"id":self.workingAddressId}).then(function (res) {
                self.names = res.body.data;

            },function(err){

            });

            self.$http.post("/contact/company_name", {
                "name": self.name,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/state", {
                "name": self.name,
            }).then(function(res){
                self.options1 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/country", {
                "name": self.name,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/tags", {
                "name": self.name,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/lastcontactid", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.last = parentdata.id;
                console.log(self.last);

            },function(err){

            });
            self.$http.post("/contact/selectacoount", {
                "name": self.name,
            }).then(function(res){
                self.options5 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectuser", {
                "name": self.name,
            }).then(function(res){
                self.options4 =res.body.data;
                console.log(res.body);
            },function(err){
            });
        },
        selectc2: function () {
            var self = this;
            self.$http.post("/contact/selectchild", {"id":self.homeAddressId}).then(function (res) {
                self.names = res.body.data;

            },function(err){

            });

            self.$http.post("/contact/company_name", {
                "name": self.name,
            }).then(function(res){
                self.options =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/state", {
                "name": self.name,
            }).then(function(res){
                self.options1 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/country", {
                "name": self.name,
            }).then(function(res){
                self.options2 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/tags", {
                "name": self.name,
            }).then(function(res){
                self.options3 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/lastcontactid", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.last = parentdata.id;
                console.log(self.last);

            },function(err){

            });
            self.$http.post("/contact/selectacoount", {
                "name": self.name,
            }).then(function(res){
                self.options5 =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/contact/selectuser", {
                "name": self.name,
            }).then(function(res){
                self.options4 =res.body.data;
                console.log(res.body);
            },function(err){
            });
        },










 //job positionss
        submitjob: function () {
            var self = this;
            self.$http.post("/recruitment/reqjob", {"status": self.gfm,"job_tittle": self.job_tittlem,"job_email": self.job_emailm,"department_id": self.department_idm,"recruitment_responsible": self.recruitment_responsiblem,"expected": self.expectedm,"job_location": self.job_locationm,"description": self.descriptionm}).then(function(res){
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/fetchJobTitles", {"jobTitle_name": self.job_title}).then(function (res) {
                self.jobTitles = res.body.result;
            }, function (err) {// alert(err);
            });
        },
        selectid: function (id) {
            var self = this;
            self.gf=id;

        },
        selectjob: function () {
            var self = this;
                   self.$http.post("/recruitment/deps", {
                       "job_tittle": self.jobspecific,
            }).then(function(res){
                self.optionsj2 =res.body.data;
                console.log(res.body);
            },function(err){
            });
            self.$http.post("/recruitment/reqresponse", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.optionsj =res.body.data;
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/recruitment/joblocation", {
                "job_tittle": self.jobspecific,
            }).then(function(res){
                self.optionsj3 =res.body.data;
                console.log(res.body);

            },function(err){

            });
        },
        selectj: function () {
            var self = this;
            self.$http.post("/recruitment/jobss", {"id": self.jobtitleId}).then(function (res) {

                var parentdata = res.body.data[0];
                self.job_tittle = parentdata.job_tittle;
                self.expected = parentdata.expected;
                self.job_email = parentdata.job_email;
                self.description = parentdata.description;



                // console.log(res.body)



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
            },function(err){

            });
        },
        submiteditjob: function () {
            var self = this;
            self.$http.post("/recruitment/reqjobs", {"status": self.gf,"id": self.jobtitleId,"job_tittle": self.job_tittle,"job_email": self.job_email,"department_id": self.department_id,"recruitment_responsible": self.recruitment_responsible,"expected": self.expected,"job_location": self.job_location,"description": self.description}).then(function(res){
                console.log(res.body);
            },function(err){

            });
            self.$http.post("/recruitment/fetchJobTitles", {"jobTitle_name": self.job_title}).then(function (res) {
                self.jobTitles = res.body.result;
            }, function (err) {
                // alert(err);
            });
        },
    },
    components: {
        DashboardController,
        Modal,
        Request_Quotation_Lower,
        Editing,
        ProductEdit,
        TableMain,
        jobs,
        contactmodaledit,
    },


}
// import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
// import Tabs from "./../../partials/Tabs/Tabs.vue"
// import ModelDescription from "./../../partials/ModelDescription/ModelDescription.vue"
// import Componame from "./../../partials/Componame/Componame.vue"
// import Tableview from "./../../partials/Tableview/Tableview.vue"
// import Editing from "./../../partials/Editing/Editing.vue"
// import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// export default{
//
//     created: function () {
//         $(document).ready(function() {
//             $('.dateRangePicker')
//                 .datepicker({
//                     format: 'mm/dd/yyyy',
//                     startDate: '01/01/2010',
//                     endDate: '12/30/2020'
//                 })
//         });
//
//         $(document).ready(function() {
//             $('.dateRangePicker1')
//                 .datepicker({
//                     format: 'mm/dd/yyyy ',
//                     startDate: '01/01/2010',
//                     endDate: '12/30/2020'
//                 });
//             $('.datetimepicker1').datetimepicker();
//         });
//
//         $('#openBtn').click(function(){
//             $('#myModal').modal({show:true})
//         });
//
//
//     },
//     data(){
//         return{
//
//             nextactivity: "Employees/New",
//             btnlinks: {
//                 createbtnlink: "#/app/sales/salescustomeredit",
//                 discardbtnlink: "#/app/attendance/Grids",
//                 importbtnlink: "#/app/imported"
//             },
//         }
//     },
//     components: {
//         Emptyform,
//         Tabs,
//         ModelDescription,
//         Componame,
//         Tableview,
//         Editing,
//         dashconterller: DashboardController
//
//
//     }
// }