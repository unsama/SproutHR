import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import Modal from "./../../partials/Modal/Modal.vue"
export default{
    created: function () {
        document.title = this.title;
        var self = this;
        $(function () {
            $("#save").click(function () {
                if(self.name=="")
                {
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                        $("#success-alert").slideUp(500);
                    });
                }
                else{
                    window.location.href = "/contact";
                    self.insert();
                }
            });
            self.select();
            $("#saves").click(function () {
                self.insert2();
                self.new();
               // self.select2();
            });
            $("#savesn").click(function () {
                self.insert2();
                self.new();
                self.select2();
            });
            $("#discard").click(function () {
                self.select2();
            });
            $(".contact_invoice").click(function () {
                $(".contact_pro").hide();
            });
            $(".contact_invoice1").click(function () {
                $(".contact_pro").show();
            });
        });
    },
    data () {
        return {
            title: '',
            name: '',
            tags: '',
            counter: 1,
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
            city:'',
            zip:'',
            country:'',
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
            notes_id:'',
            a:["a","b","c"],
            vendor_payment_terms:'',
            modal: "Create: Contacts",
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
            last:'0',
            ids:'0',
            names: [],
            names1: [],
            mnotes_id:'',
            lasting:'',
            maccount_reciveable:'',
            maccount_payable:'',
            mcustomer_payment_terms:'',
            mdegree_of_trust:'',
            mvendor_payment_terms:'',
            null:'',
            btnlinks: {
                savebtnlink:"",
                createbtnlink: "/sales/contactinfocreate",
                discardbtnlink: "/contact",
                importbtnlink: "/sales/imported"
            },
        }
    },
    methods: {
        insert: function () {
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
        new: function () {
                var self = this;
                self.mname= self.null,
                self.mtitle= self.null,
                self.mstreet1= self.null,
                self.mstreet2= self.null,
                self.mjob_position=self.null,
                self.mphone_number=self.null,
                self.mmobile_number=self.null,
                self.mfax_number=self.null,
                self.memail=self.null,
                self.mcity=self.null,
                self.mzip=self.null,
                self.mlanguage=self.null,
                self.mis_Customer=self.null,
                self.mis_sales_person=self.null,
                self.msale_pricelist=self.null,
                self.minternal_reference_id=self.null,
                self.mbank_account_id=self.null,
                self.mcountry=self.null,
                self.maddress=self.null,
                self.mnotes_id=self.null
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
        select: function () {
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
        select2: function () {
            var self = this;
            self.$http.post("/contact/selectchilds", {"ids":self.ids}).then(function (res) {
                self.names1 = res.body.data;
                console.log(self.names1);
            },function(err){

            });

        },
    },
    components: {
        DashboardController,
        ProductEdit,
        Modal
    },

}