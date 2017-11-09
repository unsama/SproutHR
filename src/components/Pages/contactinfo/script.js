import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import selectcontact from "./../../partials/selectcontact/selectcontact.vue"
export default{
    created: function () {
        var self = this;
        this.select();
        this.select1();
        self.select51();
        self.btnlinks.duplicatebtnlink ="/contact/contactduplicate/"+self.$route.params.id
        $(function () {
            var
                form = $('.form'),
                cache_width = form.width(),
                a4 = [595.28, 841.89]; // for a4s size paper width and height

            $('#print').on('click', function () {
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
                    doc.save('paymentdue.pdf');
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
        $(".delete").click(function () {
                self.submit();
                alert("are you sure delete the user");
                window.location.href = "/contact";
            });
            $("#num01").click(function () {

                self.psubmit();
            });
            $("#num10").click(function () {
                self.ssubmit();
            });
            self.btnlinks.editbtnlink ="/contact/contactinfoedit/"+self.$route.params.id
        })
    },
    props: [
        "edit",
    ],
    data () {
        return {
            //modalsssssss
            mname: '',
            mcompany: '',
            tags: [],
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
            mnotes:'',
            mtitle:'',

            title: '',
            counter: 1,
            name: '',
            num: '',
            company: '',
            individual: '',
            street1: '',
            street2: '',
            company_name: '',
            options:'',
            options1:'',
            options2:'',
            options3:'',
            options4:'',
            options5:'',
            job_position:'',
            phone_number:'',
            mobile_number:'',
            fax_number:'',
            email:'',
            language:'',
            is_Customer:'',
            is_sales_person:'',
            sale_pricelist:'',
            internal_reference_id:'',
            bank_account_id:'',
            credit_card_id:'',
            is_vendor:'',
            barcode:'',
            address:'',
            account_reciveable:'',
            account_payable:'',
            customer_payment_terms:'',
            degree_of_trust:'',
            vendor_payment_terms:'',
            modal: "Open: Contacts",
            nextactivity: "Departments/as",
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
            f: '',
            notes: '',
            parent_dept_id: '',
            manager_id: '',
            j: '',
            d: '',
            num: '',
            names: [],
            child_contact_id: '',
            aname: '',
            bname: '',
            tname: '',
            tid: '',
            num4: '1',
            btnlinks: {
                createbtnlink: "/contact/contactinfocreate",
                discardbtnlink: "#/app/Employees/EmpDash",
                editbtnlink:"/recruitment/contactinfocreate",
                importbtnlink: "#/app/imported",
                deletedropbtnlink:"",
                duplicatebtnlink:"",
                planorderbtnlink:"",
                printbtnlink:"",
                printcontactbtnlink:"",
            },
        }
    },
    methods: {
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
                    },
                    function (err) {
                    });
            }, function (err) {
            });
        },
        submit: function () {
            var self = this;
            self.$http.post("/contact/contactdeletes", {"id": self.$route.params.id}).then(function(res){
                console.log(res.body);
            },function(err){
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/contact/ctag", {"id": self.$route.params.id}).then(function (res) {
                var tags = res.body.data[0];
                self.tid = tags.tag_id;
                self.$http.post("/contact/ctags", {"tid":self.tid}).then(function (res) {
                    var data = res.body.data[0];
                    self.tname = data.tname;

            },function(err){
            });
            },function(err){
            });
            self.$http.post("/contact/selectcontactinfo", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.name = parentdata.name;
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
        select1: function () {
            var self = this;
            self.$http.post("/contact/numcontact", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {

            });
        },
        select3: function () {

            var self = this;
            self.num4+1;
        },
        dsubmit: function () {
            var self = this;
            self.$http.post("/contact/ctag", {"id": self.$route.params.id}).then(function (res) {
                var tags = res.body.data[0];
                self.tid = tags.tag_id;
                self.$http.post("/contact/ctags", {"tid":self.tid}).then(function (res) {
                    var data = res.body.data[0];
                    self.tname = data.tname;

                },function(err){
                });
            },function(err){
            });

            self.$http.post("/contact/createcontact", {
                "name": self.name,
                "individual": self.individual,
                "company": self.company,
                "address": self.address,
                "street1": self.street1,
                "street2": self.street2,
                "city": self.city,
                "states": self.states,
                "zip": self.zip,
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
            });
        },
        ssubmit: function () {
            var self = this;
            self.$http.post("/contact/ctag", {"id": self.$route.params.id}).then(function (res) {
                var tags = res.body.data[0];
                self.tid = tags.tag_id;
                self.$http.post("/contact/ctags", {"tid":self.tid}).then(function (res) {
                    var data = res.body.data[0];
                    self.tname = data.tname;

                },function(err){
                });
            },function(err){
            });
            self.$http.post("/contact/contactpage2", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.name = parentdata.name;
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
                self.$route.params.id = parentdata.id;
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
        psubmit: function () {
            var self = this;
            self.$http.post("/contact/contactpage", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.name = parentdata.name;
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
                self.$route.params.id = parentdata.id;
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
        validateBeforeSubmit() {
            var self = this;
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line

                //this.submit();
                //this.tags();
                //this.insert();
                //this.select();
                //this.insert();

                // this.submiting();


            }).catch(() => {
                // eslint-disable-next-line
                //  alert('Correct them errors!');
            });
        }
    },
    components: {
        DashboardController,
        Request_quotation_lower,
        Modal,
        Message,
        selectcontact,
    },


}